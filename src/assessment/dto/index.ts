import { IsNumber, IsOptional, IsString } from 'class-validator';

export class AssessmentDto {
  @IsNumber()
  @IsOptional()
  userAge: number;

  @IsOptional()
  @IsString()
  userLanguage: string;

  @IsOptional()
  @IsString()
  userMaritalStatus: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  education: string;

  @IsOptional()
  @IsString()
  race: string;

  @IsOptional()
  @IsString()
  sex: string;

  @IsOptional()
  @IsString()
  income: string;

  @IsOptional()
  answers: {};

  @IsOptional()
  survey: {};
}
