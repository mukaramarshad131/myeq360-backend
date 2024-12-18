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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfileService = class ProfileService {
    Prisma;
    constructor(Prisma) {
        this.Prisma = Prisma;
    }
    async createProfile(id, dto) {
        const userId = Number(id);
        await this.Prisma.getUserWithDetails(userId);
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
                bio: dto.bio
            },
            create: {
                userId: userId,
                fName: dto.fName,
                lName: dto.lName,
                phone: dto.phone,
                city: dto.city,
                state: dto.state,
                country: dto.country,
                address: dto.address,
                zip: dto.zip,
                bio: dto.bio
            }
        });
        const user = await this.Prisma.getUserWithDetails(userId);
        return {
            user: user,
            message: 'Profile updated successfully',
            status: 200,
        };
    }
    async changeRole(id, dto) {
        await this.Prisma.user.update({
            where: { id },
            data: {
                roles: {
                    set: [{ id: dto.roleId }],
                }
            }
        });
        return {
            message: 'User role updated successfully',
            status: 200,
        };
    }
    async createRole(dto) {
        await this.Prisma.roles.upsert({
            where: { id: dto.roleId ? dto.roleId : 0 },
            update: {
                name: dto.name,
                permissions: dto.permissions
            },
            create: {
                name: dto.name,
                permissions: dto.permissions
            }
        });
        return {
            message: `Role ${dto.roleId ? 'updated' : 'created'} successfully`,
            status: 200,
        };
    }
    async getAllRoles() {
        const roles = await this.Prisma.roles.findMany();
        return { status: 200, message: 'All Roles.', list: roles };
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileService);
//# sourceMappingURL=profile.service.js.map