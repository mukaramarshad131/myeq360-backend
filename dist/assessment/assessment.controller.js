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
exports.AssessmentController = void 0;
const common_1 = require("@nestjs/common");
const assessment_service_1 = require("./assessment.service");
const validateUser_interceptor_1 = require("../common/interceptors/validateUser.interceptor");
const globalErrorHandlerClass_1 = require("../common/globalErrorHandlerClass");
const getUserIdThroughToken_decorator_1 = require("../common/decorators/getUserIdThroughToken.decorator");
const dto_1 = require("./dto");
let AssessmentController = class AssessmentController {
    AssessmentService;
    constructor(AssessmentService) {
        this.AssessmentService = AssessmentService;
    }
    generateAssesement(id, dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AssessmentService.generateAssesement(id, dto));
    }
    getAssesementQuestion(id) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AssessmentService.getAssesementQuestion(id));
    }
    updateStatus(id) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AssessmentService.updateStatus(Number(id)));
    }
    getAssessmentResult(id) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.AssessmentService.getAssessmentResult(Number(id)));
    }
};
exports.AssessmentController = AssessmentController;
__decorate([
    (0, common_1.Post)('/generate'),
    __param(0, (0, getUserIdThroughToken_decorator_1.getId)('give me id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.AssessmentDto]),
    __metadata("design:returntype", Promise)
], AssessmentController.prototype, "generateAssesement", null);
__decorate([
    (0, common_1.Get)('/getAssessmentQuestions'),
    __param(0, (0, getUserIdThroughToken_decorator_1.getId)('give me id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AssessmentController.prototype, "getAssesementQuestion", null);
__decorate([
    (0, common_1.Get)('/updateStatus/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssessmentController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)('/getResult/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AssessmentController.prototype, "getAssessmentResult", null);
exports.AssessmentController = AssessmentController = __decorate([
    (0, common_1.Controller)('assessment'),
    (0, common_1.UseInterceptors)(validateUser_interceptor_1.UserValidationInterceptor),
    __metadata("design:paramtypes", [assessment_service_1.AssessmentService])
], AssessmentController);
//# sourceMappingURL=assessment.controller.js.map