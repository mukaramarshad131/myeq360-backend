import { AssessmentService } from './assessment.service';
import { response } from '../common/types';
import { AssessmentDto } from './dto';
export declare class AssessmentController {
    private AssessmentService;
    constructor(AssessmentService: AssessmentService);
    generateAssesement(id: number, dto: AssessmentDto): Promise<response>;
    getAssesementQuestion(id: number): Promise<response>;
    updateStatus(id: string): Promise<response>;
    getAssessmentResult(id: string): Promise<response>;
}
