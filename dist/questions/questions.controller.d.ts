import { response } from '../common/types';
import { QuestionsService } from './questions.service';
import { AssignDto, CompetencyDto, QuestionDto, SubCompetencyDto } from './dto/questions.dto';
import { competencySubCompetencyAssignTo, Question } from './types/types';
export declare class QuestionsController {
    private QuestionService;
    constructor(QuestionService: QuestionsService);
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
    deleteQuestion(id: number): Promise<response>;
}
