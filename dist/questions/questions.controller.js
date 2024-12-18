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
exports.QuestionsController = void 0;
const common_1 = require("@nestjs/common");
const questions_service_1 = require("./questions.service");
const questions_dto_1 = require("./dto/questions.dto");
const validateUser_interceptor_1 = require("../common/interceptors/validateUser.interceptor");
const globalErrorHandlerClass_1 = require("../common/globalErrorHandlerClass");
let QuestionsController = class QuestionsController {
    QuestionService;
    constructor(QuestionService) {
        this.QuestionService = QuestionService;
    }
    createQuestion(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.QuestionService.createQuestion(dto));
    }
    createCompetency(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.QuestionService.createCompetency(dto));
    }
    createSubCompetency(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.QuestionService.createSubCompetency(dto));
    }
    createAssignTo(dto) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.QuestionService.createAssignTo(dto));
    }
    getQuestions(id) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.QuestionService.getQuestions(id));
    }
    getCompetencySubCompentencyAssignTo() {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.QuestionService.getCompetencySubCompentencyAssignTo());
    }
    async deleteQuestion(id) {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.QuestionService.softDeleteQuestion(Number(id)));
    }
};
exports.QuestionsController = QuestionsController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [questions_dto_1.QuestionDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "createQuestion", null);
__decorate([
    (0, common_1.Post)('/createCompetency'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [questions_dto_1.CompetencyDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "createCompetency", null);
__decorate([
    (0, common_1.Post)('/createSubCompetency'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [questions_dto_1.SubCompetencyDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "createSubCompetency", null);
__decorate([
    (0, common_1.Post)('/createAssignTo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [questions_dto_1.AssignDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "createAssignTo", null);
__decorate([
    (0, common_1.Get)('/get/:id?'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "getQuestions", null);
__decorate([
    (0, common_1.Get)('/competencySubCompentencyAssignTo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "getCompetencySubCompentencyAssignTo", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "deleteQuestion", null);
exports.QuestionsController = QuestionsController = __decorate([
    (0, common_1.Controller)('questions'),
    (0, common_1.UseInterceptors)(validateUser_interceptor_1.UserValidationInterceptor),
    __metadata("design:paramtypes", [questions_service_1.QuestionsService])
], QuestionsController);
//# sourceMappingURL=questions.controller.js.map