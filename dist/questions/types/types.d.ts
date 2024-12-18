export type Question = {
    id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    question: string;
    type: string;
    rank: string;
    options: options[] | null;
    assignToId: number;
    competencyId: number;
    subCompetencyId: number;
};
export type options = {
    id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    title: string;
    questionId: number;
};
export type competency = {
    id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    title: string;
};
export type subCompetency = {
    id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    title: string;
    competencyId: number;
};
export type assignTo = {
    id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    title: string;
};
export type competencySubCompetencyAssignTo = {
    competencies: competency[];
    subCompetencies: subCompetency[];
    assignTo: assignTo[];
};
