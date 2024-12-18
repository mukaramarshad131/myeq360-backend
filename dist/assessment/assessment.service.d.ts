import { response } from '../common/types';
import { PrismaService } from '../prisma/prisma.service';
import { AssessmentDto } from './dto';
export declare class AssessmentService {
    private Prisma;
    constructor(Prisma: PrismaService);
    generateAssesement(id: number, dto: AssessmentDto): Promise<response>;
    getAssesementQuestion(id: number): Promise<{
        questions: any;
        progress?: number;
        result?: any;
        assessment_id?: number;
    } & response>;
    updateStatus(id: number): Promise<response>;
    getAssessmentResult(id: number): Promise<{
        assessment: any;
    } & response>;
}
