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
exports.LicenseController = void 0;
const common_1 = require("@nestjs/common");
const license_service_1 = require("./license.service");
const license_dto_1 = require("./dto/license.dto");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const multer_1 = require("multer");
const fs_1 = require("fs");
const globalErrorHandlerClass_1 = require("../common/globalErrorHandlerClass");
let LicenseController = class LicenseController {
    LicenseService;
    constructor(LicenseService) {
        this.LicenseService = LicenseService;
    }
    async createLiscense(dto, file) {
        const filePath = file ? `uploads/${file.filename}` : null;
        return this.LicenseService.createLiscense(filePath, dto);
    }
    async createPakages(dto, file) {
        const filePath = file ? `uploads/${file.filename}` : null;
        return this.LicenseService.createPakages(filePath, dto);
    }
    createLiscenseCategory(dto) {
        return this.LicenseService.createLiscenseCategory(dto);
    }
    allCategories() {
        return this.LicenseService.allCategories();
    }
    allLicense() {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.LicenseService.allLicense());
    }
    allPackages() {
        return (0, globalErrorHandlerClass_1.apiWrapper)(() => this.LicenseService.allPackages());
    }
};
exports.LicenseController = LicenseController;
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadPath = './uploads';
                if (!(0, fs_1.existsSync)(uploadPath)) {
                    (0, fs_1.mkdirSync)(uploadPath, { recursive: true });
                }
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const fileExt = (0, path_1.extname)(file.originalname);
                cb(null, `${file.fieldname}-${uniqueSuffix}${fileExt}`);
            },
        }),
        limits: { fileSize: 1e6 },
        fileFilter: (req, file, cb) => {
            if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                cb(null, true);
            }
            else {
                cb(new Error('Only image files are allowed!'), false);
            }
        },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [license_dto_1.LicenseDto, Object]),
    __metadata("design:returntype", Promise)
], LicenseController.prototype, "createLiscense", null);
__decorate([
    (0, common_1.Post)('/createPackage'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadPath = './uploads';
                if (!(0, fs_1.existsSync)(uploadPath)) {
                    (0, fs_1.mkdirSync)(uploadPath, { recursive: true });
                }
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const fileExt = (0, path_1.extname)(file.originalname);
                cb(null, `${file.fieldname}-${uniqueSuffix}${fileExt}`);
            },
        }),
        limits: { fileSize: 1e6 },
        fileFilter: (req, file, cb) => {
            if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                cb(null, true);
            }
            else {
                cb(new Error('Only image files are allowed!'), false);
            }
        },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [license_dto_1.PackageDto, Object]),
    __metadata("design:returntype", Promise)
], LicenseController.prototype, "createPakages", null);
__decorate([
    (0, common_1.Post)('/createCategory'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [license_dto_1.LicenseCategory]),
    __metadata("design:returntype", Promise)
], LicenseController.prototype, "createLiscenseCategory", null);
__decorate([
    (0, common_1.Get)('/allCategories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LicenseController.prototype, "allCategories", null);
__decorate([
    (0, common_1.Get)('/allLicense'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LicenseController.prototype, "allLicense", null);
__decorate([
    (0, common_1.Get)('/allPackages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LicenseController.prototype, "allPackages", null);
exports.LicenseController = LicenseController = __decorate([
    (0, common_1.Controller)('license'),
    __metadata("design:paramtypes", [license_service_1.LicenseService])
], LicenseController);
//# sourceMappingURL=license.controller.js.map