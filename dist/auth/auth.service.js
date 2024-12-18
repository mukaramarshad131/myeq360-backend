"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    Prisma;
    JwtService;
    mailService;
    constructor(Prisma, JwtService, mailService) {
        this.Prisma = Prisma;
        this.JwtService = JwtService;
        this.mailService = mailService;
    }
    async hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async getToken(id, email) {
        const payload = {
            sub: id,
            email,
        };
        const access_token = await this.JwtService.signAsync(payload, {
            secret: process.env.JWT_AT_SECRET,
            expiresIn: '2d',
        });
        return access_token;
    }
    async signUp(dto) {
        const hash = await this.hashData(dto.password);
        const [existingEmail, existingUsername] = await Promise.all([
            this.Prisma.user.findUnique({ where: { email: dto.email } }),
            this.Prisma.user.findUnique({ where: { username: dto.username } }),
        ]);
        if (existingEmail) {
            throw new common_1.ConflictException('Email already exists.');
        }
        if (existingUsername) {
            throw new common_1.ConflictException('Username already exists.');
        }
        const individualRole = await this.Prisma.roles.upsert({
            where: { name: 'individual' },
            update: {},
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
    async signIn(dto) {
        try {
            const findUser = await this.Prisma.user.findUnique({
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
                    checkOutDetails: {
                        select: {
                            created_at: true,
                            members: true,
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
            const isPasswordValid = await bcrypt.compare(dto.password.trim(), findUser.hash);
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
        }
        catch (error) {
            console.error('Error during sign-in:', error);
            return { status: 500, message: 'An error occurred during sign-in.' };
        }
    }
    async verifyUniqueUsername(dto) {
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
    async changePassword(id, dto) {
        const user = await this.Prisma.user.findUnique({
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
        const hash = await this.hashData(dto.newPassword);
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
    async emailVerification(id) {
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
    async forgetPasswordSendEmail(email) {
        const findUser = await this.Prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!findUser) {
            return { status: 422, message: 'User not found.' };
        }
        const token = this.JwtService.sign({ userId: findUser.id }, { expiresIn: '2h' });
        await this.mailService.sendForgetPasswordEmail(email, token);
        return {
            status: 200,
            message: 'Reset password request sent succefully. Please check your email box.',
        };
    }
    async createNewPassword(dto) {
        try {
            const decode = await this.JwtService.verify(dto.token);
            const userId = Number(decode.userId);
            const hash = await this.hashData(dto.password);
            await this.Prisma.getUserWithDetails(userId);
            await this.Prisma.user.update({
                where: { id: userId },
                data: {
                    hash,
                },
            });
            return { status: 200, message: 'Password updated successfully.' };
        }
        catch (error) {
            if (error instanceof jwt_1.TokenExpiredError) {
                return {
                    status: 400,
                    message: 'Token has expired. Please request a new one.',
                };
            }
            throw new common_1.BadRequestException('Invalid token or other error occurred.');
        }
    }
    async getUsers() {
        const users = await this.Prisma.user.findMany();
        return { users };
    }
    async checkOut(id, dto) {
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
        const parentRole = ['Coach', 'District', 'Executive'];
        const findRole = (title) => {
            return Object.keys(rolesList).find((keyword) => {
                const normalizedTitle = title.toLowerCase();
                const normalizedKeyword = keyword.toLowerCase();
                return normalizedTitle.includes(normalizedKeyword);
            });
        };
        const items = dto.items.map((item) => item?.packageLicenses
            ? item.packageLicenses.map((ele) => ({
                title: ele.license.title,
                qty: ele.qty * item.quantity,
                role: rolesList[findRole(ele.license.title)],
            }))
            : {
                title: item.title,
                qty: item.quantity,
                role: rolesList[findRole(item.title)],
            });
        const checkOut = await this.Prisma.checkOutDetail.create({
            data: {
                email: dto.email,
                fName: dto.fName,
                Lname: dto.Lname,
                companyName: dto.companyName,
                country: dto.country,
                zip: dto.zip,
                phoneNumber: dto.phoneNumber,
                note: dto.note,
                items: items,
                amount: dto.amount,
                ...(dto.coupanId ? {
                    coupan: {
                        connect: { id: dto.coupanId }
                    }
                } : {}),
                user: {
                    connect: { id }
                },
                members: {
                    create: {
                        expire_at: new Date(new Date().setDate(new Date().getDate() + 180)),
                        user: {
                            connect: { id }
                        },
                        memberList: {
                            create: items.flatMap(ele => {
                                if (Array.isArray(ele)) {
                                    return ele.map(key => ({
                                        role: {
                                            connectOrCreate: {
                                                where: { name: key.role },
                                                create: { name: key.role },
                                            }
                                        },
                                        qty: key.qty,
                                        admin_id: id,
                                        ...(parentRole.includes(key.role) && { List: {
                                                connect: { id }
                                            } })
                                    }));
                                }
                                else {
                                    return {
                                        role: {
                                            connectOrCreate: {
                                                where: { name: ele.role },
                                                create: { name: ele.role },
                                            }
                                        },
                                        qty: ele.qty,
                                        admin_id: id,
                                        List: {
                                            connect: { id }
                                        }
                                    };
                                }
                            })
                        }
                    }
                }
            }
        });
        if (checkOut) {
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
            return { status: 200, message: 'checkout successfully.' };
        }
    }
    async getMembers(id, type) {
        const membersList = await this.Prisma.members.findMany({
            where: { userId: id,
                ...(type && { memberList: {
                        some: { role: { name: type } }
                    } })
            },
            include: {
                memberList: {
                    select: {
                        id: true,
                        qty: true,
                        role: {
                            select: { name: true }
                        },
                        List: {
                            select: {
                                id: true,
                                username: true,
                                roles: true,
                                email: true,
                                status: true,
                                assessments: true
                            }
                        }
                    }
                }
            }
        });
        if (!membersList) {
            return { status: 422, message: 'User not found.' };
        }
        return { status: 200, message: 'All Members List.', list: membersList };
    }
    async creatMember(id, dto) {
        const [existingEmail, existingUsername, currUser] = await Promise.all([
            this.Prisma.user.findUnique({ where: { email: dto.email } }),
            this.Prisma.user.findUnique({ where: { username: dto.username } }),
            this.Prisma.user.findUnique({ where: { id } })
        ]);
        if (existingEmail) {
            throw new common_1.ConflictException('Email already exists.');
        }
        if (existingUsername) {
            throw new common_1.ConflictException('Username already exists.');
        }
        const hash = await this.hashData(dto.password);
        const Role = await this.Prisma.roles.findUnique({ where: { name: dto.role } });
        const categorizedMembersList = await this.Prisma.categorizedMembers.findMany({
            where: {
                admin_id: id,
                roleId: Role.id
            },
            include: {
                List: true
            }
        });
        const cMLId = categorizedMembersList.find(key => (key.qty > key.List.length));
        if (!categorizedMembersList) {
            return { status: 422, message: 'You are not authorized to create this user.' };
        }
        if (!cMLId) {
            return { status: 422, message: 'Package limit exceeded.' };
        }
        const newUser = await this.Prisma.user.create({
            data: {
                email: dto.email,
                username: dto.username,
                hash,
                roles: {
                    connectOrCreate: {
                        where: { name: dto.role },
                        create: { name: dto.role }
                    }
                },
                CategorizedMembers: {
                    connect: {
                        id: cMLId?.id,
                    }
                }
            }
        });
        if (newUser) {
            await this.mailService.sendUserInvitation(newUser, currUser.username, dto.role, dto.password);
            return { status: 200, message: 'Member is created successfully.' };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map