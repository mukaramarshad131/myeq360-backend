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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const public_decorator_1 = require("../common/decorators/public.decorator");
const getUserIdThroughToken_decorator_1 = require("../common/decorators/getUserIdThroughToken.decorator");
const globalErrorHandlerClass_1 = require("../common/globalErrorHandlerClass");
let AuthController = class AuthController {
    AuthService;
    constructor(AuthService) {
        this.AuthService = AuthService;
    }
    signUp(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.signUp(dto));
    }
    signIn(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.signIn(dto));
    }
    verifyUniqueUsername(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.verifyUniqueUsername(dto));
    }
    changePassword(id, dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.changePassword(id, dto));
    }
    async emailVerification(id, res) {
        try {
            await (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.emailVerification(id));
            res.redirect(process.env.FRONTEND_LOGIN_URL + '/login');
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).send('Verification failed. Please contact support.');
        }
    }
    forgetPasswordSendEmail(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.forgetPasswordSendEmail(dto.email));
    }
    createNewPassword(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.createNewPassword(dto));
    }
    checkOut(id, dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.checkOut(id, dto));
    }
    creatMember(id, dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.creatMember(id, dto));
    }
    getMembers(id, type) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.getMembers(id, type));
    }
    getUers() {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AuthService.getUsers());
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/signUp'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AuthSignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/signIn'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AuthSignInDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/username'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AuthUsername]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyUniqueUsername", null);
__decorate([
    (0, common_1.Post)('/changePassword'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, getUserIdThroughToken_decorator_1.getId)('give me id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.ChangePassword]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/emailVerification/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "emailVerification", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/forgetPassword'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ForgetPasswordEmail]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgetPasswordSendEmail", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/createNewPassword'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createNewPassword", null);
__decorate([
    (0, common_1.Post)('/checkOut'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, getUserIdThroughToken_decorator_1.getId)('give me id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.CheckOutDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkOut", null);
__decorate([
    (0, common_1.Post)('/createMember'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, getUserIdThroughToken_decorator_1.getId)('give me id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.CreateMember]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "creatMember", null);
__decorate([
    (0, common_1.Get)('/members/:type?'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, getUserIdThroughToken_decorator_1.getId)('give me id')),
    __param(1, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMembers", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getUers", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map