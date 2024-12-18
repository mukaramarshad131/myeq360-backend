"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFileInterceptor = CustomFileInterceptor;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const common_2 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
function CustomFileInterceptor(fieldName, maxSize = 1e6, allowedTypes = ['jpg', 'jpeg', 'png']) {
    let CustomInterceptor = class CustomInterceptor {
        intercept(context, next) {
            const multerOptions = {
                storage: (0, multer_1.diskStorage)({
                    destination: './uploads',
                    filename: (req, file, cb) => {
                        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                        const fileExt = (0, path_1.extname)(file.originalname);
                        cb(null, `${file.fieldname}-${uniqueSuffix}${fileExt}`);
                    },
                }),
                limits: { fileSize: maxSize },
                fileFilter: (req, file, cb) => {
                    if (!allowedTypes.some(type => file.mimetype.includes(type))) {
                        return cb(new common_1.BadRequestException('Invalid file type'), false);
                    }
                    cb(null, true);
                },
            };
            const fileInterceptor = new ((0, platform_express_1.FileInterceptor)(fieldName, multerOptions))();
            const ctx = context.switchToHttp();
            const request = ctx.getRequest();
            const response = ctx.getResponse();
            return new rxjs_1.Observable(observer => {
                fileInterceptor.intercept(context, {
                    handle: () => {
                        return next.handle().pipe((0, operators_1.tap)(() => observer.complete()), (0, operators_1.catchError)(err => {
                            observer.error(err);
                            return [];
                        }));
                    },
                });
            });
        }
    };
    CustomInterceptor = __decorate([
        (0, common_1.Injectable)()
    ], CustomInterceptor);
    return (0, common_2.mixin)(CustomInterceptor);
}
//# sourceMappingURL=customFileUpload.interceptor.js.map