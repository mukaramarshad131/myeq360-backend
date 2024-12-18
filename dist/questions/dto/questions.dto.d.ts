import { QuestionType } from "../types/enum";
export declare class QuestionDto {
    question: string;
    type: QuestionType;
    rank: string;
    id: number;
    options: string[];
    assignToId: number;
    competencyId: number;
    subCompetencyId: any;
}
export declare class options {
    title: string;
    id: number;
    questionId: number;
}
export declare class CompetencyDto {
    title: string;
    id: number;
    subCompetency: string[];
}
export declare class SubCompetencyDto {
    title: string;
    id: number;
    competencyId: number;
    competencyTitle: string;
}
export declare class AssignDto {
    title: string;
    id: number;
}
