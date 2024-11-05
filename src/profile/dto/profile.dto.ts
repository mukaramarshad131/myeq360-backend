import { isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class profileDto{
    @IsNotEmpty()
    @IsString()
    fName:string;
    
    @IsNotEmpty()
    @IsString()
    lName  :string;
    @IsNotEmpty()
    @IsString()
    phone  :string;
    @IsNotEmpty()
    @IsString()
    city   :string;
    @IsNotEmpty()
    @IsString()
    state  :string;

    @IsNotEmpty()
    @IsString()
    country:string;

    @IsNotEmpty()
    @IsString()
    address:string;
    @IsNotEmpty()
    @IsString()
    zip    :string;

    @IsNotEmpty()
    @IsString()
    bio    :string;

  }

  export class ChangeRoleDto{

    @IsNotEmpty()
    @IsNumber()
    roleId:number;


  }

  export class CreateRoleDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    permissions:Record<any,any>|null

    @IsOptional()
    @IsNumber()
    roleId:number;
  }