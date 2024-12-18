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
exports.LicenseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LicenseService = class LicenseService {
    Prisma;
    constructor(Prisma) {
        this.Prisma = Prisma;
    }
    async createLiscense(filePath, dto) {
        const price = Number(dto.disc) > 0 ? Number(dto.price) - (Number(dto.price) * (Number(dto.disc) / 100)) : Number(dto.price);
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
        }
        catch (error) {
            return {
                status: 500,
                message: `An error occurred. Please try again. Error: ${error.message}`,
            };
        }
    }
    async createPakages(filePath, dto) {
        const price = Number(dto.disc) > 0 ? Number(dto.price) - (Number(dto.price) * (Number(dto.disc) / 100)) : Number(dto.price);
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
                        deleteMany: {},
                        create: dto.licenses.map((license) => ({
                            qty: Number(license.quantity),
                            license: {
                                connect: { id: Number(license.LicenseId) },
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
                            qty: Number(license.quantity),
                            license: {
                                connect: { id: Number(license.LicenseId) },
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
        }
        catch (error) {
            return {
                status: 500,
                message: `An error occurred. Please try again. Error: ${error.message}`,
            };
        }
    }
    async createLiscenseCategory(dto) {
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
        }
        catch (error) {
            return {
                status: 500,
                message: `An error occurred. Please try again. Error: ${error.message}`,
            };
        }
    }
    async allCategories() {
        try {
            const list = await this.Prisma.category.findMany();
            if (!list) {
                return { status: 401, message: 'No data found.' };
            }
            return { status: 200, message: 'All Categories', list };
        }
        catch (error) {
            return {
                status: 500,
                message: `An error occurred. Please try again. Error: ${error.message}`,
            };
        }
    }
    async allPackages() {
        const packages = await this.Prisma.packages.findMany({
            include: {
                category: {
                    select: {
                        title: true
                    }
                },
                packageLicenses: {
                    include: {
                        license: {
                            select: {
                                title: true,
                                image: true,
                                price: true,
                                oldPrice: true,
                            }
                        }
                    }
                }
            }
        });
        if (!packages) {
            return {
                status: 404,
                message: 'No packages found.'
            };
        }
        return {
            status: 200,
            message: 'All packages list.',
            list: packages,
        };
    }
    async allLicense() {
        const licenses = await this.Prisma.license.findMany({
            include: {
                category: {
                    select: {
                        title: true
                    }
                }
            }
        });
        if (!licenses) {
            return {
                status: 404,
                message: 'No liscense found.'
            };
        }
        return {
            status: 200,
            message: 'All liscense list.',
            list: licenses,
        };
    }
};
exports.LicenseService = LicenseService;
exports.LicenseService = LicenseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LicenseService);
//# sourceMappingURL=license.service.js.map