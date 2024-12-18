import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  AuthSignInDto,
  AuthSignUpDto,
  AuthUsername,
  ChangePassword,
  CheckOutDto,
  CreateMember,
  CreatePasswordDto,
} from './dto';
import * as bcrypt from 'bcrypt';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { response } from 'src/common/types';


@Injectable()
export class AuthService {
  constructor(
    private Prisma: PrismaService,
    private JwtService: JwtService,
    private mailService: MailService,
  ) {}
  //handlers
  async hashData(data: string) {
    return bcrypt.hash(data, 10);
  }
  async getToken(id: number, email: string): Promise<string> {
    const payload = {
      sub: id,
      email,
    };
    const access_token = await this.JwtService.signAsync(payload, {
      secret: process.env.JWT_AT_SECRET, // Your JWT secret from environment variables
      expiresIn: '2d',
    });

    return access_token;
  }
  //services
  async signUp(dto: AuthSignUpDto): Promise<response> {
    const hash: string = await this.hashData(dto.password);
    const [existingEmail, existingUsername] = await Promise.all([
      this.Prisma.user.findUnique({ where: { email: dto.email } }),
      this.Prisma.user.findUnique({ where: { username: dto.username } }),
    ]);

    if (existingEmail) {
      throw new ConflictException('Email already exists.');
    }
    if (existingUsername) {
      throw new ConflictException('Username already exists.');
    }
    const individualRole = await this.Prisma.roles.upsert({
      where: { name: 'individual' },
      update: {}, // No update needed, just ensuring the role exists
      create: {
        name: 'individual',
        permissions: [],
      },
    });
    if (!individualRole) {
      throw new Error('Failed to find or create "individual" role');
    }
    const newUser = await this.Prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        hash,
        roles: {
          connect: { id: individualRole.id },
        },
      },
    });
    await this.mailService.sendUserConfirmation(newUser);
    const { hash: pass, hashRt, ...rest } = newUser;
    return { status: 200, message: 'User created successfully.' };
  }
  async signIn(
    dto: AuthSignInDto,
  ): Promise<{
    user?: any;
    accessToken?: string;
    message: string;
    status: number;
  }> {
    try {
      // Find the user by email
      const findUser: any = await this.Prisma.user.findUnique({
        where: {
          username: dto.username,
        },
        include: {
          roles: {
            select: {
              name: true,
              permissions: true,
            },
          },
          checkOutDetails:{
            select:{
              created_at:true,
              members:true,
            }
          },
          profile: true,
        },
      });
      if (!findUser) {
        return { status: 422, message: 'User not found.' };
      }
      if (!findUser.status) {
        return { status: 422, message: 'Email is not verified yet.' };
      }
      const isPasswordValid = await bcrypt.compare(
        dto.password.trim(),
        findUser.hash,
      );
      if (!isPasswordValid) {
        return { status: 422, message: 'Invalid password.' };
      }
      const accessToken = await this.getToken(findUser.id, findUser.email);
      const { hash: pass, hashRt, ...rest } = findUser;
      return {
        status: 200,
        user: rest,
        accessToken,
        message: 'Sign-in successful.',
      };
    } catch (error) {
      console.error('Error during sign-in:', error);
      return { status: 500, message: 'An error occurred during sign-in.' };
    }
  }
  async verifyUniqueUsername(
    dto: AuthUsername,
  ): Promise<{ status: number; message: string }> {
    // Find the user by email
    const findUser = await this.Prisma.user.findUnique({
      where: {
        username: dto.username,
      },
    });
    if (!findUser) {
      return { status: 200, message: 'Username is available.' };
    }
    return { status: 200, message: 'Username already exists.' };
  }
  async changePassword(
    id: number,
    dto: ChangePassword,
  ): Promise<{ status: number; message: string }> {
    const user: any = await this.Prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(dto.oldPassword, user.hash);

    if (!isPasswordValid) {
      return { status: 422, message: 'Invalid password.' };
    }
    const hash: string = await this.hashData(dto.newPassword);
    await this.Prisma.user.update({
      where: {
        id,
      },
      data: {
        hash,
      },
    });
    return {
      message: 'Password updated successfully',
      status: 200,
    };
  }
  async emailVerification(id: string): Promise<response> {
    const userId = Number(id);
    await this.Prisma.getUserWithDetails(userId);
    await this.Prisma.user.update({
      where: { id: userId },
      data: {
        status: true,
      },
    });
    return { status: 200, message: 'Email is verified successfuly.' };
  }
  async forgetPasswordSendEmail(email: string): Promise<response> {
    const findUser = await this.Prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!findUser) {
      return { status: 422, message: 'User not found.' };
    }
    const token = this.JwtService.sign(
      { userId: findUser.id },
      { expiresIn: '2h' },
    );

    await this.mailService.sendForgetPasswordEmail(email, token);
    return {
      status: 200,
      message:
        'Reset password request sent succefully. Please check your email box.',
    };
  }
  async createNewPassword(dto: CreatePasswordDto): Promise<response> {
    try {
      const decode = await this.JwtService.verify(dto.token);
      const userId = Number(decode.userId);
      const hash: string = await this.hashData(dto.password);
      await this.Prisma.getUserWithDetails(userId);

      await this.Prisma.user.update({
        where: { id: userId },
        data: {
          hash,
        },
      });
      return { status: 200, message: 'Password updated successfully.' };
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        // Handle token expiration
        return {
          status: 400,
          message: 'Token has expired. Please request a new one.',
        };
      }
      // Handle other errors
      throw new BadRequestException('Invalid token or other error occurred.');
    }
  }
  async getUsers(): Promise<any> {
    const users = await this.Prisma.user.findMany();
    return { users };
  }
  async checkOut(id: number, dto: CheckOutDto): Promise<response> {
    const rolesList = {
      executive: 'Executive',
      team: 'Team member',
      manager: 'Manager',
      district: 'District',
      principal: 'Principal',
      teacher: 'Teacher',
      student: 'Student',
      client: 'Client',
      coach: 'Coach',
    };
    const parentRole = ['Coach', 'District', 'Executive']
    const findRole = (title) => {
      return Object.keys(rolesList).find((keyword) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedKeyword = keyword.toLowerCase();
        return normalizedTitle.includes(normalizedKeyword);
      });
    };
    const items = dto.items.map((item) =>
      item?.packageLicenses
        ? item.packageLicenses.map((ele) => ({
            title: ele.license.title,
            qty: ele.qty * item.quantity,
            role: rolesList[findRole(ele.license.title)],
          }))
        : {
            title: item.title,
            qty: item.quantity,
            role: rolesList[findRole(item.title)],
          },
    );

    const checkOut = await this.Prisma.checkOutDetail.create({
      data:{
        email       :dto.email,
        fName       :dto.fName,
        Lname       :dto.Lname,
        companyName :dto.companyName,
        country     :dto.country,
        zip         :dto.zip,
        phoneNumber :dto.phoneNumber,
        note        :dto.note,
        items       :items,
        amount      :dto.amount,
        ...(dto.coupanId? {
          coupan:{
            connect:{id:dto.coupanId}
          }
        }:{}),
        user:{
          connect:{id}
        },
        members:{
          create:{
            expire_at: new Date(new Date().setDate(new Date().getDate() + 180)),
            user:{
              connect:{id}
            },
            memberList:{
              create:items.flatMap(ele=>{
                if(Array.isArray(ele)){
                  return ele.map(key=>({
                    role:{
                      connectOrCreate:{
                        where:{name:key.role},
                        create:{name:key.role},
                      }
                    },
                    qty:key.qty,
                    admin_id:id,
                    ...(parentRole.includes(key.role)&& {List:{
                      connect:{id}
                    }})
                  }))
                }else{
                  return {
                    role:{
                      connectOrCreate:{
                        where:{name:ele.role},
                        create:{name:ele.role},
                      }
                    },
                    qty:ele.qty,
                    admin_id:id,
                    List:{
                      connect:{id}
                    }      
                  }
                }
              })
            }
          }
        }
      }
    })

    if(checkOut){
    //   // const currentUser = await this.Prisma.user.findUnique({where:{id}})

    const user = await this.Prisma.user.update({
      where: { id },
      data: {
        roles: {
          connectOrCreate: items?.map((ele) => {
            const role = Array.isArray(ele)
              ? ele.some((key) => key.role === 'Executive')
                ? 'Executive'
                : ele.some((key) => key.role === 'Coach')
                  ? 'Coach'
                  : 'District'
              : ele?.role;
            return {
              where: { name: role },
              create: { name: role },
            };
          }),
        },
      },
    });

      return  { status: 200, message: 'checkout successfully.'};
    }
  }

  async getMembers(id: number, type:string):Promise<response & {list?:Record<string, any>}>{

    const membersList = await this.Prisma.members.findMany({
      where:{userId:id,
       ...(type && { memberList:{
          some:{role:{name:type}}
        }})
      },
      include:{
        memberList:{
        select:{
          id:true,
          qty:true,
          role:{
            select:{name:true}
          },
          List:{
            select:{
              id:true,
              username:true,
              roles:true,
              email:true,
              status:true,
              assessments:true
            }
          }
        }
      }
    }})
    if(!membersList){
      return { status: 422, message: 'User not found.' };
    }
    return  { status: 200, message: 'All Members List.', list:membersList };
  }

  async creatMember(id: number, dto: CreateMember): Promise<response> {

    const [existingEmail, existingUsername, currUser] = await Promise.all([
      this.Prisma.user.findUnique({ where: { email: dto.email } }),
      this.Prisma.user.findUnique({ where: { username: dto.username } }),
      this.Prisma.user.findUnique({ where: { id}})]);

    if (existingEmail) {
      throw new ConflictException('Email already exists.');
    }
    if (existingUsername) {
      throw new ConflictException('Username already exists.');
    }
    const hash: string = await this.hashData(dto.password);
    const Role = await this.Prisma.roles.findUnique({where:{name:dto.role}})
    const categorizedMembersList = await this.Prisma.categorizedMembers.findMany({
      where:{
        admin_id:id,
        roleId: Role.id
      },
      include:{
        List:true
      }
    })
    const cMLId = categorizedMembersList.find(key => (key.qty > key.List.length))
    if(!categorizedMembersList){
      return {status:422, message:'You are not authorized to create this user.'}
    }
    if(!cMLId){
      return {status:422, message:'Package limit exceeded.'}
    }
    const newUser =await this.Prisma.user.create({
      data:{
        email:dto.email,
        username:dto.username,
        hash,
        roles:{
          connectOrCreate:{
            where:{name:dto.role},
            create:{name:dto.role}
          }
        },
        CategorizedMembers:{
          connect:{
            id:cMLId?.id,
          }
        }
      }
    })
    if(newUser){
      await this.mailService.sendUserInvitation(newUser, currUser.username, dto.role, dto.password);
      return {status:200, message:'Member is created successfully.'}
    }
  }
}
