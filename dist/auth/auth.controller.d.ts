import { AuthService } from './auth.service';
import { AuthSignInDto, AuthSignUpDto, AuthUsername, ChangePassword, CheckOutDto, CreateMember, CreatePasswordDto, ForgetPasswordEmail } from './dto';
import { Response } from 'express';
import { response } from 'src/common/types';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    signUp(dto: AuthSignUpDto): Promise<{
        user?: any;
        message?: string;
        status: number;
    }>;
    signIn(dto: AuthSignInDto): Promise<{
        user?: any;
        accessToken?: string;
        message?: string;
        status: number;
    }>;
    verifyUniqueUsername(dto: AuthUsername): Promise<{
        message: string;
    }>;
    changePassword(id: number, dto: ChangePassword): Promise<{
        status: number;
        message: string;
    }>;
    emailVerification(id: string, res: Response): Promise<void>;
    forgetPasswordSendEmail(dto: ForgetPasswordEmail): Promise<response>;
    createNewPassword(dto: CreatePasswordDto): Promise<response>;
    checkOut(id: number, dto: CheckOutDto): Promise<response>;
    creatMember(id: number, dto: CreateMember): Promise<response>;
    getMembers(id: number, type: string): Promise<response>;
    getUers(): Promise<any>;
}
