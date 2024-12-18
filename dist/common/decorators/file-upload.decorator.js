"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadedFilePath = void 0;
const common_1 = require("@nestjs/common");
const multer = require("multer");
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
exports.UploadedFilePath = (0, common_1.createParamDecorator)((options, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return new Promise((resolve, reject) => {
        const { allowedFileTypes = /\.(jpg|jpeg|png|gif|pdf)$/i, maxFileSize = 5 * 1024 * 1024 } = options || {};
        const storage = (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadDir = './uploads';
                if (!(0, fs_1.existsSync)(uploadDir)) {
                    (0, fs_1.mkdirSync)(uploadDir, { recursive: true });
                }
                cb(null, uploadDir);
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const fileExt = (0, path_1.extname)(file.originalname);
                cb(null, `${file.fieldname}-${uniqueSuffix}${fileExt}`);
            },
        });
        const multerConfig = multer({
            storage,
            limits: { fileSize: maxFileSize },
            fileFilter: (req, file, cb) => {
                if (!file.originalname.match(allowedFileTypes)) {
                    return cb(new common_1.BadRequestException(`Invalid file type! Allowed types: ${allowedFileTypes}`));
                }
                cb(null, true);
            },
        }).single('file');
        multerConfig(request, request.res, (err) => {
            if (err instanceof multer.MulterError) {
                if (err.code === 'LIMIT_FILE_SIZE') {
                    return reject(new common_1.BadRequestException(`File size is too large! Maximum size allowed is ${maxFileSize / (1024 * 1024)} MB.`));
                }
                return reject(new common_1.BadRequestException(err.message));
            }
            else if (err) {
                return reject(err);
            }
            if (request.file) {
                resolve(`${storage.getDestination(request, request.file)}/${request.file.filename}`);
            }
            else {
                resolve(null);
            }
        });
    });
});
//# sourceMappingURL=file-upload.decorator.js.map