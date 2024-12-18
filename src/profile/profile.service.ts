import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChangeRoleDto, CreateRoleDto, profileDto } from './dto/profile.dto';
import { Prisma } from '@prisma/client';
import { response } from 'src/common/types';



@Injectable()
export class ProfileService {
    constructor(private Prisma:PrismaService){}

    async createProfile(id:string, dto: profileDto):Promise<{ user?: any, message?:string, status:number}>{
        const userId = Number(id)
            await this.Prisma.getUserWithDetails(userId)
              // Update the profile if it exists
               await this.Prisma.profile.upsert({
                where: { userId },
                update: {
                  fName: dto.fName,
                  lName: dto.lName,
                  phone: dto.phone,
                  city: dto.city,
                  state: dto.state,
                  country: dto.country,
                  address: dto.address,
                  zip: dto.zip,
                  bio:dto.bio
                },
                create:{
                    userId:userId,
                    fName: dto.fName,
                    lName: dto.lName,
                    phone: dto.phone,
                    city: dto.city,
                    state: dto.state,
                    country: dto.country,
                    address: dto.address,
                    zip: dto.zip,
                    bio:dto.bio
                }as Prisma.ProfileUncheckedCreateInput
              });
                const user = await this.Prisma.getUserWithDetails(userId)
      
              return {
                user: user,
                message: 'Profile updated successfully',
                status: 200,
              };
    }
    async changeRole(id:number, dto:ChangeRoleDto):Promise<response>{
        await this.Prisma.user.update({
          where:{id},
          data:{
            roles:{
              set: [{ id: dto.roleId }],
            }
          }
        })
        return {
          message: 'User role updated successfully',
          status: 200,
        };
    }
    async createRole(dto:CreateRoleDto):Promise<response>{
        await this.Prisma.roles.upsert({
          where:{id:dto.roleId?dto.roleId:0},
          update:{
            name:dto.name,
            permissions:dto.permissions
          },
          create:{
            name:dto.name,
            permissions:dto.permissions
          }
        })
        return {
          message: `Role ${dto.roleId?'updated':'created'} successfully`,
          status: 200,
        }
    }
    async getAllRoles (){
      const roles = await this.Prisma.roles.findMany()
      return {status:200, message:'All Roles.', list:roles}
    }
}