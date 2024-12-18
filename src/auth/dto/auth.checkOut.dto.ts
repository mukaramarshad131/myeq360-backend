import { IsArray, IsEmail, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CheckOutDto{
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    fName:string;

    @IsNotEmpty()
    @IsString()
    Lname:string;
    
    @IsOptional()
    @IsString()
    companyName:string;
    
    @IsNotEmpty()
    @IsString()
    country:string;
    
    @IsNotEmpty()
    @IsString()
    zip:string;
    
    @IsNotEmpty()
    @IsString()
    phoneNumber:string;
    
    @IsOptional()
    @IsString()
    note:string;

    @IsNotEmpty()
    @IsArray()
    items:Record<string, any>[];

    @IsNotEmpty()
    @IsNumber()
    amount:number;

    @IsOptional()
    @IsNumber()
    coupanId: number;
}