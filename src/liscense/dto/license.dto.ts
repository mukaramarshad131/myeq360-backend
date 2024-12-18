import { Type } from "class-transformer";
import { ArrayNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"

export class LicenseDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    des:string;

    @IsOptional()
    id:number;

    @IsNotEmpty()
    price:number;

    @IsOptional()
    disc:number;

    @IsOptional()
    image:string

    @IsNotEmpty()
    categoryId:number
}
export class PackageDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    categoryId:number
    
    @IsNotEmpty()
    @IsString()
    des:string;

    @IsOptional()
    id:number;

    @IsNotEmpty()
    price:number;

    @IsOptional()
    disc:number;

    @IsOptional()
    image:string

    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => packageLicense)
    licenses:packageLicense[]
}
class packageLicense{
    @IsNotEmpty()
    quantity:number

    @IsNotEmpty()
    LicenseId:number
}
export class LicenseCategory{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsOptional()
    @IsNumber()
    id:number;

    @IsOptional()
    @IsNumber()
    liscense_id:number;
}