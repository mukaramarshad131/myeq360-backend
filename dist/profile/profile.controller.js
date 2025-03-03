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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const profile_dto_1 = require("./dto/profile.dto");
const profile_service_1 = require("./profile.service");
const getUserIdThroughToken_decorator_1 = require("../common/decorators/getUserIdThroughToken.decorator");
const globalErrorHandlerClass_1 = require("../common/globalErrorHandlerClass");
let ProfileController = class ProfileController {
    ProfileService;
    constructor(ProfileService) {
        this.ProfileService = ProfileService;
    }
    createProfile(id, dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.ProfileService.createProfile(id, dto));
    }
    changeRole(id, dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.ProfileService.changeRole(id, dto));
    }
    createRole(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.ProfileService.createRole(dto));
    }
    getAllRoles() {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.ProfileService.getAllRoles());
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Post)('/get/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, profile_dto_1.profileDto]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "createProfile", null);
__decorate([
    (0, common_1.Post)('/changeRole'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, getUserIdThroughToken_decorator_1.getId)('give me id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, profile_dto_1.ChangeRoleDto]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "changeRole", null);
__decorate([
    (0, common_1.Post)('/createRole'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "createRole", null);
__decorate([
    (0, common_1.Get)('/allRoles'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getAllRoles", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map