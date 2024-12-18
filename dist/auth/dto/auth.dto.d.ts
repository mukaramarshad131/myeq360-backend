export declare class AuthSignUpDto {
    username: string;
    email: string;
    password: string;
}
export declare class AuthSignInDto {
    username: string;
    password: string;
}
export declare class AuthUsername {
    username: string;
}
export declare class ChangePassword {
    oldPassword: string;
    newPassword: string;
}
export declare class CreatePasswordDto {
    password: string;
    token: string;
}
export declare class ForgetPasswordEmail {
    email: string;
}
export declare class CreateMember {
    email: string;
    username: string;
    password: string;
    role: string;
}
