import { Body, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { response } from '../common/types';
import { QuestionsService } from './questions.service';
import { AssignDto, CompetencyDto, QuestionDto, SubCompetencyDto } from './dto/questions.dto';
import { UserValidationInterceptor } from '../common/interceptors/validateUser.interceptor';
import { competencySubCompetencyAssignTo, Question } from './types/types';
import { apiWrapper } from 'src/common/globalErrorHandlerClass';

@Controller('questions')
@UseInterceptors(UserValidationInterceptor) 
export class QuestionsController {
    constructor(private QuestionService:QuestionsService){}
    //Create/Update  APIs
    @Post('/create')
    createQuestion(@Body () dto:QuestionDto):Promise<response>{
        return apiWrapper(()=>this.QuestionService.createQuestion(dto))
    }
    @Post('/createCompetency')
    createCompetency(@Body () dto:CompetencyDto):Promise<response>{
        return apiWrapper(()=>this.QuestionService.createCompetency(dto))
    }
    @Post('/createSubCompetency')
    createSubCompetency(@Body () dto:SubCompetencyDto):Promise<response>{
        return apiWrapper(()=>this.QuestionService.createSubCompetency(dto))
    }
    @Post('/createAssignTo')
    createAssignTo(@Body () dto:AssignDto):Promise<response>{
        return apiWrapper(()=>this.QuestionService.createAssignTo(dto))
    }
    //Get APIs
    @Get('/get/:id?')
    getQuestions(@Param('id') id?:string):Promise<{list?:Question[]|Question }& response>{
        return apiWrapper(()=>this.QuestionService.getQuestions(id))
    }
    @Get('/competencySubCompentencyAssignTo')
    getCompetencySubCompentencyAssignTo():Promise<{list?:competencySubCompetencyAssignTo|null }& response>{
        return apiWrapper(()=>this.QuestionService.getCompetencySubCompentencyAssignTo())
    }
    @Delete('/delete/:id')
    async deleteQuestion(@Param('id') id: number): Promise<response> {
      return apiWrapper(()=>this.QuestionService.softDeleteQuestion(Number(id)));
    }
}
