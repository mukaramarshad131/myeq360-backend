import { PrismaService } from '../prisma/prisma.service';
import { AuthSignInDto, AuthSignUpDto, AuthUsername, ChangePassword, CheckOutDto, CreateMember, CreatePasswordDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { response } from 'src/common/types';
export declare class AuthService {
    private Prisma;
    private JwtService;
    private mailService;
    constructor(Prisma: PrismaService, JwtService: JwtService, mailService: MailService);
    hashData(data: string): Promise<string>;
    getToken(id: number, email: string): Promise<string>;
    signUp(dto: AuthSignUpDto): Promise<response>;
    signIn(dto: AuthSignInDto): Promise<{
        user?: any;
        accessToken?: string;
        message: string;
        status: number;
    }>;
    verifyUniqueUsername(dto: AuthUsername): Promise<{
        status: number;
        message: string;
    }>;
    changePassword(id: number, dto: ChangePassword): Promise<{
        status: number;
        message: string;
    }>;
    emailVerification(id: string): Promise<response>;
    forgetPasswordSendEmail(email: string): Promise<response>;
    createNewPassword(dto: CreatePasswordDto): Promise<response>;
    getUsers(): Promise<any>;
    checkOut(id: number, dto: CheckOutDto): Promise<response>;
    getMembers(id: number, type: string): Promise<response & {
        list?: Record<string, any>;
    }>;
    creatMember(id: number, dto: CreateMember): Promise<response>;
}
