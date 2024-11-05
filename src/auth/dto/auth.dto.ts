import { IsEmail, IsNotEmpty, IsNumber, IsString} from "class-validator";


export class AuthSignUpDto{
    @IsNotEmpty()
    @IsString()
    username:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}
export class AuthSignInDto{
    @IsNotEmpty()
    @IsString()
    username:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}

export class AuthUsername{
    @IsNotEmpty()
    @IsString()
    username:string;
}

export class ChangePassword{
    @IsNotEmpty()
    @IsString()
    oldPassword:string;

    @IsNotEmpty()
    @IsString()
    newPassword:string;

}
export class CreatePasswordDto{
    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsString()
    token:string;
}
export class ForgetPasswordEmail{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string;
}