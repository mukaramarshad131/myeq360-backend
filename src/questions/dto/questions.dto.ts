import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { QuestionType } from "../types/enum";

export class QuestionDto{
    @IsNotEmpty()
    @IsString()
    question:string;

    @IsNotEmpty()
    @IsEnum(QuestionType, { message: 'Type must be either RANGE or MULTIPLE' })
    type:QuestionType

    @IsNotEmpty()
    @IsString()
    rank:string;

    @IsOptional()
    id:number;

    @IsOptional()
    options:string[];

    @IsNotEmpty()
    @IsNumber()
    assignToId:number; 

    @IsNotEmpty()
    @IsNumber()
    competencyId:number;
    
    @IsNotEmpty()
    @IsNumber()
    subCompetencyId 
}

export class options{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsOptional()
    @IsNumber()
    id:number;

    @IsOptional()
    @IsNumber()
    questionId:number;
}
export class CompetencyDto{
    @IsNotEmpty()
    @IsString()
    title:string;


    @IsOptional()
    id:number;
    
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SubCompetencyDto)
    subCompetency: string[];
}
export class SubCompetencyDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsOptional()
    id:number;

    @IsOptional()
    @IsNumber()
    @Type(() => CompetencyDto)
    competencyId:number;

    @IsOptional()
    @IsString()
    competencyTitle:string;
}
export class AssignDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsOptional()
    id:number;
}