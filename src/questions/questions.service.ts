import { Injectable } from '@nestjs/common';
import { response } from '../common/types';
import { PrismaService } from '../prisma/prisma.service';
import {
  AssignDto,
  CompetencyDto,
  QuestionDto,
  SubCompetencyDto,
} from './dto/questions.dto';
import { competencySubCompetencyAssignTo, Question } from './types/types';

@Injectable()
export class QuestionsService {
  constructor(private Prisma: PrismaService) {}

  async createQuestion(dto: QuestionDto): Promise<response> {
      await this.Prisma.question.upsert({
        where: { id: dto.id || 0 }, // Using id for update, otherwise fallback to create
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
          // Handling options update if type is MULTIPLE
          ...(dto.options && dto.options.length > 0
            ? {
                options: {
                  connectOrCreate: dto.options.map((option) => ({
                    where: { title: option }, // Assuming `title` is unique
                    create: { title: option }, // Create the option if it doesn't exist
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
                    where: { title: option }, // Assuming `title` is unique
                    create: { title: option }, // Create the option if it doesn't exist
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
  async createCompetency(dto: CompetencyDto): Promise<response> {
      await this.Prisma.competency.upsert({
        where: { ...(dto.id ? { id: dto.id } : { title: dto.title }) },
        update: {
          title: dto.title,
          ...(dto.subCompetency && {
            subCompentency: {
              connectOrCreate: dto.subCompetency.map((item) =>
                isNaN(Number(item))
                  ? {
                      // Handling new sub-competency by title
                      where: { title: item },
                      create: { title: item },
                    }
                  : {
                      // Connecting existing sub-competency by ID
                      where: { id: Number(item) },
                      create: { title: item }, // In case it doesn't exist, create a new one
                    },
              ),
            },
          }),
        },
        create: {
          title: dto.title,
          ...(dto.subCompetency && {
            subCompentency: {
              connectOrCreate: dto.subCompetency.map((item) =>
                isNaN(Number(item))
                  ? {
                      // Handling new sub-competency by title
                      where: { title: item },
                      create: { title: item },
                    }
                  : {
                      // Connecting existing sub-competency by ID
                      where: { id: Number(item) },
                      create: { title: item }, // In case it doesn't exist, create a new one
                    },
              ),
            },
          }),
        },
      });

      return {
        status: 200,
        message: `Competency ${dto.id ? 'updated' : 'created'} successfully`,
      };
  }
  async createSubCompetency(dto: SubCompetencyDto): Promise<response> {
      await this.Prisma.subCompetency.upsert({
        where: { ...(dto.id ? { id: dto.id } : { title: dto.title }) },
        update: {
          title: dto.title,
          competency: {
            ...(dto.competencyId
              ? {
                  connect: {
                    id: dto.competencyId, // Connect if competencyId exists
                  },
                }
              : {
                  create: { title: dto.competencyTitle }, // Create if competencyId is not provided
                }),
          },
        },
        create: {
          title: dto.title,
          competency: {
            ...(dto.competencyId
              ? {
                  connect: {
                    id: dto.competencyId, // Connect if competencyId exists
                  },
                }
              : {
                  create: { title: dto.competencyTitle }, // Create if competencyId is not provided
                }),
          },
        },
      });

      return {
        status: 200,
        message: `Subcompetency ${dto.id ? 'updated' : 'created'} successfully`,
      };
  }
  async createAssignTo(dto: AssignDto): Promise<response> {
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
  async getQuestions(
    id?: string,
  ): Promise<{ list?: Question[] | Question } & response> {
      let questions: any;
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
      } else {
        questions = await this.Prisma.question.findMany({
            where:{deleted_at:null},
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
  async getCompetencySubCompentencyAssignTo(): Promise<
    { list?: competencySubCompetencyAssignTo | null } & response
  > {
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
  async softDeleteQuestion(id: number): Promise<response> {
      // Check if the question exists and is not already soft deleted
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

      // Update the `deleted_at` field to the current timestamp
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
}
