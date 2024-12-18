interface FileUploadOptions {
    allowedFileTypes?: RegExp;
    maxFileSize?: number;
}
export declare const UploadedFilePath: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | FileUploadOptions)[]) => ParameterDecorator;
export {};
