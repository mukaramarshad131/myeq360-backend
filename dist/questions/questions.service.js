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
exports.QuestionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let QuestionsService = class QuestionsService {
    Prisma;
    constructor(Prisma) {
        this.Prisma = Prisma;
    }
    async createQuestion(dto) {
        await this.Prisma.question.upsert({
            where: { id: dto.id || 0 },
            update: {
                question: dto.question,
                type: dto.type,
                rank: dto.rank,
                assignTo: {
                    connect: { id: dto.assignToId },
                },
                competency: {
                    connect: { id: dto.competencyId },
                },
                subCompetency: {
                    connect: { id: dto.subCompetencyId },
                },
                ...(dto.options && dto.options.length > 0
                    ? {
                        options: {
                            connectOrCreate: dto.options.map((option) => ({
                                where: { title: option },
                                create: { title: option },
                            })),
                        },
                    }
                    : {}),
            },
            create: {
                question: dto.question,
                type: dto.type,
                rank: dto.rank,
                competency: {
                    connect: { id: dto.competencyId },
                },
                assignTo: {
                    connect: { id: dto.assignToId },
                },
                subCompetency: {
                    connect: { id: dto.subCompetencyId },
                },
                ...(dto.options && dto.options.length > 0
                    ? {
                        options: {
                            connectOrCreate: dto.options.map((option) => ({
                                where: { title: option },
                                create: { title: option },
                            })),
                        },
                    }
                    : {}),
            },
        });
        return {
            status: 200,
            message: `Question ${dto.id ? 'updated' : 'created'} successfully`,
        };
    }
    async createCompetency(dto) {
        await this.Prisma.competency.upsert({
            where: { ...(dto.id ? { id: dto.id } : { title: dto.title }) },
            update: {
                title: dto.title,
                ...(dto.subCompetency && {
                    subCompentency: {
                        connectOrCreate: dto.subCompetency.map((item) => isNaN(Number(item))
                            ? {
                                where: { title: item },
                                create: { title: item },
                            }
                            : {
                                where: { id: Number(item) },
                                create: { title: item },
                            }),
                    },
                }),
            },
            create: {
                title: dto.title,
                ...(dto.subCompetency && {
                    subCompentency: {
                        connectOrCreate: dto.subCompetency.map((item) => isNaN(Number(item))
                            ? {
                                where: { title: item },
                                create: { title: item },
                            }
                            : {
                                where: { id: Number(item) },
                                create: { title: item },
                            }),
                    },
                }),
            },
        });
        return {
            status: 200,
            message: `Competency ${dto.id ? 'updated' : 'created'} successfully`,
        };
    }
    async createSubCompetency(dto) {
        await this.Prisma.subCompetency.upsert({
            where: { ...(dto.id ? { id: dto.id } : { title: dto.title }) },
            update: {
                title: dto.title,
                competency: {
                    ...(dto.competencyId
                        ? {
                            connect: {
                                id: dto.competencyId,
                            },
                        }
                        : {
                            create: { title: dto.competencyTitle },
                        }),
                },
            },
            create: {
                title: dto.title,
                competency: {
                    ...(dto.competencyId
                        ? {
                            connect: {
                                id: dto.competencyId,
                            },
                        }
                        : {
                            create: { title: dto.competencyTitle },
                        }),
                },
            },
        });
        return {
            status: 200,
            message: `Subcompetency ${dto.id ? 'updated' : 'created'} successfully`,
        };
    }
    async createAssignTo(dto) {
        await this.Prisma.assignTo.upsert({
            where: { ...(dto.id ? { id: dto.id } : { title: dto.title }) },
            update: {
                title: dto.title,
            },
            create: {
                title: dto.title,
            },
        });
        return {
            status: 200,
            message: `Assign type ${dto.id ? 'updated' : 'created'} successfully`,
        };
    }
    async getQuestions(id) {
        let questions;
        if (id) {
            questions = await this.Prisma.question.findMany({
                where: { id: Number(id), deleted_at: null },
                include: {
                    assignTo: true,
                    subCompetency: true,
                    options: true,
                    competency: true,
                },
            });
            if (!questions) {
                return { status: 404, message: `Question with id ${id} not found.` };
            }
        }
        else {
            questions = await this.Prisma.question.findMany({
                where: { deleted_at: null },
                include: {
                    assignTo: true,
                    subCompetency: true,
                    options: true,
                    competency: true,
                },
            });
        }
        return {
            status: 200,
            message: id ? 'Single question.' : 'All Questions.',
            list: questions,
        };
    }
    async getCompetencySubCompentencyAssignTo() {
        const competencies = await this.Prisma.competency.findMany();
        const subCompetencies = await this.Prisma.subCompetency.findMany({
            include: {
                competency: true,
            },
        });
        const assignTo = await this.Prisma.assignTo.findMany();
        return {
            status: 200,
            message: 'data is fetched succesfully',
            list: { competencies, subCompetencies, assignTo },
        };
    }
    async softDeleteQuestion(id) {
        const question = await this.Prisma.question.findUnique({
            where: { id },
            select: { deleted_at: true },
        });
        if (!question) {
            return {
                message: 'Question not found',
                status: 404,
            };
        }
        if (question.deleted_at) {
            return {
                message: 'Question is already deleted',
                status: 400,
            };
        }
        await this.Prisma.question.update({
            where: { id },
            data: {
                deleted_at: new Date(),
            },
        });
        return {
            message: 'Question deleted successfully',
            status: 200,
        };
    }
};
exports.QuestionsService = QuestionsService;
exports.QuestionsService = QuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuestionsService);
//# sourceMappingURL=questions.service.js.map