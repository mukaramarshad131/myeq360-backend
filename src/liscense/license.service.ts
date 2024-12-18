import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { response } from '../common/types';
import { LicenseCategory, LicenseDto, PackageDto } from './dto/license.dto';

@Injectable()
export class LicenseService {
  constructor(private Prisma: PrismaService) {}

  async createLiscense(filePath: string, dto: LicenseDto): Promise<response> {
    const price = Number(dto.disc) >0?Number(dto.price) - (Number(dto.price) * (Number(dto.disc) / 100)):Number(dto.price)
    try {
      await this.Prisma.license.upsert({
        where: { id: dto.id || 0 },
        update: {
          title: dto.title,
          des: dto.des,
          price: price,
          oldPrice: Number(dto.price),
          disc: Number(dto.disc),
          ...(filePath ? { image: filePath } : {}),
          category: {
            connect: { id: Number(dto.categoryId) },
          },
        },
        create: {
          title: dto.title,
          des: dto.des,
          price: price,
          oldPrice: Number(dto.price),
          disc: Number(dto.disc),
          image: filePath,
          category: {
            connect: { id: Number(dto.categoryId) },
          },
        },
      });
      return {
        status: 200,
        message: `Liscense ${dto.id ? 'updated' : 'created'} successfully.`,
      };
    } catch (error:any) {
      return {
        status: 500,
        message: `An error occurred. Please try again. Error: ${error.message}`,
      };
    }
  }
  async createPakages(filePath: string, dto: PackageDto): Promise<response>{
    const price = Number(dto.disc) >0?Number(dto.price) - (Number(dto.price) * (Number(dto.disc) / 100)):Number(dto.price)
    try {
      await this.Prisma.packages.upsert({
        where: { id: Number(dto.id) || 0 },
        update: {
          title: dto.title,
          des: dto.des,
          price: price,
          oldPrice: Number(dto.price),
          disc: Number(dto.disc),
          ...(filePath ? { image: filePath } : {}),
          packageLicenses: {
            deleteMany: {}, // Remove existing relations to avoid duplicates
            create: dto.licenses.map((license) => ({
              qty: Number(license.quantity), // Quantity of the license
              license: {
                connect: { id: Number(license.LicenseId) }, // Connect to an existing license by ID
              },
            })),
          },
          category: {
            connect: { id: Number(dto.categoryId) },
          },
        },
        create: {
          title: dto.title,
          des: dto.des,
          price: price,
          oldPrice: Number(dto.price),
          disc: Number(dto.disc),
          image: filePath,
          packageLicenses: {
            create: dto.licenses.map((license) => ({
              qty: Number(license.quantity), // Quantity of the license
              license: {
                connect: { id: Number(license.LicenseId )}, // Connect to an existing license by ID
              },
            })),
          },
          category: {
            connect: { id: Number(dto.categoryId) },
          },
        },
      });
      return {
        status: 200,
        message: `Package ${dto.id ? 'updated' : 'created'} successfully.`,
      };
    } catch (error:any) {
      return {
        status: 500,
        message: `An error occurred. Please try again. Error: ${error.message}`,
      };
    }
  }
  async createLiscenseCategory(dto: LicenseCategory): Promise<response> {
    try {
      await this.Prisma.category.upsert({
        where: { id: dto.id || 0 },
        update: { title: dto.title },
        create: {
          title: dto.title,
        },
      });
      return {
        status: 200,
        message: `Liscense Category ${dto.id ? 'updated' : 'created'} successfully.`,
      };
    } catch (error:any) {
      return {
        status: 500,
        message: `An error occurred. Please try again. Error: ${error.message}`,
      };
    }
  }
  async allCategories(): Promise<any> {
    try {
      const list = await this.Prisma.category.findMany();
         if(!list){
            return { status: 401, message:'No data found.'};
         }
      return { status: 200, message: 'All Categories', list };
    } catch (error:any) {
        return {
            status: 500,
            message: `An error occurred. Please try again. Error: ${error.message}`,
          };
    }
  }
  async allPackages():Promise<{list?:Record<string,any>[]} & response>{
    const packages = await this.Prisma.packages.findMany({
      include:{
        category:{
          select:{
            title:true
          }
        },
        packageLicenses:{
          include:{
            license:{
              select:{
                title:true,
                image:true,
                price:true,
                oldPrice:true,
              }
            }
          }
        }
      }
    });

    if(!packages){
      return {
        status:404,
        message:'No packages found.'
      }
    }
    return {
      status:200,
      message:'All packages list.',
      list:packages,
    }
  }
  async allLicense():Promise<{list?:Record<string,any>[]} & response>{
    const licenses = await this.Prisma.license.findMany({
      include:{
        category:{
          select:{
            title:true
          }
        }
      }
    });

    if(!licenses){
      return {
        status:404,
        message:'No liscense found.'
      }
    }
    return {
      status:200,
      message:'All liscense list.',
      list:licenses,
    }
  }
}
