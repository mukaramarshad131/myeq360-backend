import { NestInterceptor, Type } from '@nestjs/common';
export declare function CustomFileInterceptor(fieldName: string, maxSize?: number, allowedTypes?: string[]): Type<NestInterceptor>;
