import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChangeRoleDto, CreateRoleDto, profileDto } from './dto/profile.dto';
import { Prisma } from '@prisma/client';
import { response } from 'src/common/types';
import { connect } from 'http2';


@Injectable()
export class ProfileService {
    constructor(private Prisma:PrismaService){}

    async createProfile(id:string, dto: profileDto):Promise<{ user?: any, message?:string, status:number}>{
        const userId = Number(id)
        try {
            // Check if the profile exists for the given user
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
          } catch (error) {
            // Handle any potential errors
            return {
              message: `An error occurred: ${error.message}`,
              status: 500,
            };
          }
    }
    async changeRole(id:number, dto:ChangeRoleDto):Promise<response>{
      try {
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
      } catch (error) {
        return {
          message: `An error occurred: ${error.message}`,
          status: 500,
        };
      }
    }
    async createRole(dto:CreateRoleDto):Promise<response>{
      try {
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
        };
      } catch (error) {
        return {
          message: `An error occurred: ${error.message}`,
          status: 500,
        };
      }
    }

}
