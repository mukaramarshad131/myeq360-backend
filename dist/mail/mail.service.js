"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailService = class MailService {
    mailerService;
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendUserConfirmation(user) {
        const url = process.env.BASE_URL + `auth/emailVerification/${user.id}`;
        try {
            const res = await this.mailerService.sendMail({
                to: user.email,
                subject: 'Welcome to Eq360! Confirm your Email',
                template: './confirmation',
                context: {
                    name: user.username,
                    url,
                },
            });
        }
        catch (error) {
            console.error('Error sending email:', error);
        }
    }
    async sendForgetPasswordEmail(email, token) {
        const url = process.env.FRONTEND_LOGIN_URL + `/login?reset=true&token=${token}`;
        try {
            const res = await this.mailerService.sendMail({
                to: email,
                subject: 'Forget Password',
                template: './resetPassword',
                context: {
                    email: email,
                    url,
                },
            });
        }
        catch (error) {
            console.error('Error sending email:', error);
        }
    }
    async sendUserInvitation(user, name2, role, password) {
        const url = process.env.BASE_URL + `auth/emailVerification/${user.id}`;
        try {
            const res = await this.mailerService.sendMail({
                to: user.email,
                subject: 'Welcome to Eq360! Confirm your Invitation',
                template: './invitation',
                context: {
                    name: user.username,
                    email: user.email,
                    name2,
                    role,
                    password,
                    url,
                },
            });
        }
        catch (error) {
            console.error('Error sending email:', error);
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
//# sourceMappingURL=mail.service.js.map