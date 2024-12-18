import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(user: any): Promise<void>;
    sendForgetPasswordEmail(email: string, token: string): Promise<void>;
    sendUserInvitation(user: any, name2: string, role: string, password: string): Promise<void>;
}
