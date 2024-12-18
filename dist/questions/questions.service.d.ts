import { response } from '../common/types';
import { PrismaService } from '../prisma/prisma.service';
import { AssignDto, CompetencyDto, QuestionDto, SubCompetencyDto } from './dto/questions.dto';
import { competencySubCompetencyAssignTo, Question } from './types/types';
export declare class QuestionsService {
    private Prisma;
    constructor(Prisma: PrismaService);
    createQuestion(dto: QuestionDto): Promise<response>;
    createCompetency(dto: CompetencyDto): Promise<response>;
    createSubCompetency(dto: SubCompetencyDto): Promise<response>;
    createAssignTo(dto: AssignDto): Promise<response>;
    getQuestions(id?: string): Promise<{
        list?: Question[] | Question;
    } & response>;
    getCompetencySubCompentencyAssignTo(): Promise<{
        list?: competencySubCompetencyAssignTo | null;
    } & response>;
    softDeleteQuestion(id: number): Promise<response>;
}
