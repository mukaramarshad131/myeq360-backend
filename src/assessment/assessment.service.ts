import { Injectable } from '@nestjs/common';
import { response } from '../common/types';
import { PrismaService } from '../prisma/prisma.service';
import { AssessmentDto } from './dto';

@Injectable()
export class AssessmentService {
  constructor(private Prisma: PrismaService) {}

  async generateAssesement(  id: number,  dto: AssessmentDto): Promise<response> {
    const assessment = await this.Prisma.assessment.findMany({
      where: {
        userId: id,
        status: false,
      },
    });

    if (assessment?.length < 1) {
      await this.Prisma.assessment.create({
        data: {
          userAge: dto.userAge,
          userLanguage: dto.userLanguage,
          userMaritalStatus: dto.userMaritalStatus,
          country: dto.country,
          education: dto.education,
          user: {
            connect: { id },
          },
          assessment: [],
          result: [],
        },
      });
      return {
        status: 200,
        message: 'Assessment Created Successfully',
      };
    } else {
      if (dto.answers && Array.isArray(assessment[0].assessment)) {
        await this.Prisma.assessment.update({
          where: {
            id: assessment[0].id,
          },
          data: {
            assessment: assessment[0].assessment.map((item: any) => ({ ...item, answer: dto.answers[Number(item.id)] !== undefined ? dto.answers[Number(item.id)] : item.answer || '',})),
          },
        });

        return {
          status: 200,
          message: 'Assessment Answers updated.',
        };
      }else{
        if(dto.race&&dto.income&&dto.sex&&Array.isArray(assessment[0].assessment)){
          const negativeMarking = { 5:1, 4:2, 3:3, 2:4, 1:5}
          const result = (assessment[0].assessment as Array<any>).reduce((acc, curr)=>{ 
            const compentencyTitle = curr.competency.title;
            const subCompentencyTitle = curr.subCompetency.title;

            if(!acc[compentencyTitle]){
              acc[compentencyTitle]= {}
            }
            if(!acc[compentencyTitle][subCompentencyTitle]){
              acc[compentencyTitle][subCompentencyTitle]= { "answers":[], "total":0, "percentOutOf20":0, "competencyPercent":0}
            }

            acc[compentencyTitle][subCompentencyTitle]["answers"].push(curr.rank ==="negative"?negativeMarking[curr.answer]:curr.answer)
            acc[compentencyTitle][subCompentencyTitle]["total"] = acc[compentencyTitle][subCompentencyTitle]["answers"].reduce((acc,curr)=> acc+curr , 0)
            acc[compentencyTitle][subCompentencyTitle]["percentOutOf20"] = Number(((acc[compentencyTitle][subCompentencyTitle]["total"]/20) *100).toFixed(2))
            acc[compentencyTitle][subCompentencyTitle]["competencyPercent"] = Number(((33.33/100) *acc[compentencyTitle][subCompentencyTitle]["percentOutOf20"]).toFixed(2))
            acc[compentencyTitle]["result"] = Math.round(Number(Object.values(acc[compentencyTitle])?.filter((item: any) => typeof item === 'object' && item.competencyPercent !== undefined)?.reduce((acc, curr:any)=> acc+ curr.competencyPercent, 0)))
            return acc
          },{})
        await this.Prisma.assessment.update({
          where: {
            id: assessment[0].id,
          },
          data: {
          userAge: dto.userAge || assessment[0].userAge,
          userLanguage: dto.userLanguage || assessment[0].userLanguage,
          userMaritalStatus: dto.userMaritalStatus || assessment[0].userMaritalStatus,
          country: dto.country || assessment[0].country,
          education: dto.education || assessment[0].education,
          race: dto.race || assessment[0].race,
          sex: dto.sex || assessment[0].sex ,
          income: dto.income || assessment[0].income,
          result
          },
        });
        return {
          status: 200,
          message: 'Assessment Completed.',
        };
      }
      if(dto.survey){
        await this.Prisma.assessment.update({
          where: {
            id: assessment[0].id,
          },
          data: {
          status:true,
          survey:dto.survey
          },
        });
        return {
          status: 200,
          message: 'Assessment Survey Completed.',
        };
      }
      }
    }
  }
  async getAssesementQuestion(  id: number): Promise<{ questions: any, progress?: number, result?:any, assessment_id?:number} & response>{
    const assessment = await this.Prisma.assessment.findMany({
      where: {
        userId: id,
        status: false,
      },
    });
    if (assessment?.length < 1) {
      return{
        status: 200,
        message: 'No Assessment found.',
        questions: [],
      };
    }else{
      let questions; 
      let progress ;
      if(Array.isArray(assessment[0].assessment)){
      const notWantQuestionsIds = new Set(assessment[0].assessment.map((item: any) => item.id));

      questions = await this.Prisma.question.findMany({
        where: {
          id: { notIn: Array.from(notWantQuestionsIds) },
          type: 'RANGE',
          assignTo: { title: 'Adult' },
        },
        take: 6,
        select: {
          id: true,
          question: true,
          type: true,
          rank: true,
          options: {
            select: {
              id: true,
              title: true,
            },
          },
          competency: {
            select: {
              id: true,
              title: true,
            },
          },
          subCompetency: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });
      if(questions.length < 1){
          questions = await this.Prisma.question.findMany({
              where: {
                id: { notIn: Array.from(notWantQuestionsIds) },
                type: 'MULTIPLE',
                assignTo: { title: 'Adult' },
              },
              take: 1,
              select: {
                id: true,
                question: true,
                type: true,
                rank: true,
                options: {
                  select: {
                    id: true,
                    title: true,
                  },
                },
                competency: {
                  select: {
                    id: true,
                    title: true,
                  },
                },
                subCompetency: {
                  select: {
                    id: true,
                    title: true,
                  },
                },
              },
            });
            if(questions.length < 1){
              return {
                status: 200,
                message: 'Assessment Completed',
                questions: [],
                result: assessment[0].result,
                assessment_id:assessment[0].id
              };
            }
      }
      progress = assessment[0].assessment.length
      const updatedAssessmentData = [
        ...assessment[0].assessment.filter((item: any) => item.answer !==''),
        ...questions.map((item) => ({ ...item, answer: '' }))
      ]
      await this.Prisma.assessment.update({
        where: {
          id: assessment[0].id,
        },
        data: {
          assessment: updatedAssessmentData,
        },
      });
    }

      return {
        status: 200,
        message: 'Questions list.',
        progress: Math.round((progress/72 )*100),
        questions: questions,
      };
    }
  }
  async updateStatus(id:number):Promise<response> {
   const assessment= await this.Prisma.assessment.update({
      where:{id},
      data:{
        status:true
      }
    })
    if(!assessment){
      return {
        status: 422,
        message: 'No assessment found.'}
    }
    return {
      status: 200,
      message: 'Assessment status updated.'}
    }
  async getAssessmentResult(id:number): Promise<{assessment:any} & response>{
    const assessment = await this.Prisma.assessment.findUnique({
      where:{id},
      select:{
        updated_at:true,
        user:{
          select:{
            username:true,
            email:true
          }
        },
        result:true,
      }
    })
    if(!assessment){
      return{
        status:409,
        message:'No assessment found.',
        assessment:null
      }
    }
    return {
      status:200,
        message:'Assessment result',
        assessment:assessment
    }
  }
}
