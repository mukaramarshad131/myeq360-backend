import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { UserValidationInterceptor } from '../common/interceptors/validateUser.interceptor';
import { apiWrapper } from '../common/globalErrorHandlerClass';
import { response } from '../common/types';
import { getId } from '../common/decorators/getUserIdThroughToken.decorator';
import { AssessmentDto } from './dto';

@Controller('assessment')
@UseInterceptors(UserValidationInterceptor) 
export class AssessmentController {
    constructor(private AssessmentService:AssessmentService){}

    @Post('/generate')
    generateAssesement(@getId('give me id') id:number,@Body () dto:AssessmentDto):Promise<response>{
        return apiWrapper(()=>this.AssessmentService.generateAssesement(id, dto))
    }
    @Get('/getAssessmentQuestions')
    getAssesementQuestion(@getId('give me id') id:number):Promise<response>{
        return apiWrapper(()=>this.AssessmentService.getAssesementQuestion(id))
    }
    @Get('/updateStatus/:id')
    updateStatus(@Param('id') id:string):Promise<response>{
        return apiWrapper(()=>this.AssessmentService.updateStatus(Number(id)))
    }
    @Get('/getResult/:id')
    getAssessmentResult(@Param('id') id:string):Promise<response>{
        return apiWrapper(()=>this.AssessmentService.getAssessmentResult(Number(id)))
    }
}
