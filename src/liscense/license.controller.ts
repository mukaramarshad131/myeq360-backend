import { Body, Controller, Get, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { response } from '../common/types';
import { LicenseService } from './license.service';
import { LicenseCategory, LicenseDto, PackageDto } from './dto/license.dto';
import {FileInterceptor} from '@nestjs/platform-express'
import { extname } from 'path';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { apiWrapper } from 'src/common/globalErrorHandlerClass';


@Controller('license')
export class LicenseController {
    constructor(private LicenseService:LicenseService){}
    @Post('/create')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
          destination:  (req, file, cb) => {
            const uploadPath = './uploads'; // Use /tmp/uploads as the directory
            if (!existsSync(uploadPath)) {
              mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
          },// Define the upload path
          filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const fileExt = extname(file.originalname);
            cb(null, `${file.fieldname}-${uniqueSuffix}${fileExt}`);
          },
        }),
        limits: { fileSize: 1e6 }, // 1 MB file size limit
        fileFilter: (req, file, cb) => {
          if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            cb(null, true); // Accept file
          } else {
            cb(new Error('Only image files are allowed!'), false); // Reject file
          }
        },
      }))
    async createLiscense(@Body() dto:LicenseDto, @UploadedFile() file:Express.Multer.File):Promise<any>{
        const filePath = file ? `uploads/${file.filename}` : null;
     return this.LicenseService.createLiscense(filePath, dto)
    }
    @Post('/createPackage')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
          destination:  (req, file, cb) => {
            const uploadPath = './uploads'; // Use /tmp/uploads as the directory
            if (!existsSync(uploadPath)) {
              mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
          },// Define the upload path
          filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const fileExt = extname(file.originalname);
            cb(null, `${file.fieldname}-${uniqueSuffix}${fileExt}`);
          },
        }),
        limits: { fileSize: 1e6 }, // 1 MB file size limit
        fileFilter: (req, file, cb) => {
          if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            cb(null, true); // Accept file
          } else {
            cb(new Error('Only image files are allowed!'), false); // Reject file
          }
        },
      }))
    async createPakages(@Body() dto:PackageDto, @UploadedFile() file:Express.Multer.File):Promise<any>{
        const filePath = file ? `uploads/${file.filename}` : null;
     return this.LicenseService.createPakages(filePath, dto)
    }
    @Post('/createCategory')
    createLiscenseCategory(@Body() dto:LicenseCategory):Promise<response>{
     return this.LicenseService.createLiscenseCategory(dto)
    }
    @Get('/allCategories')
    allCategories():Promise<response>{
     return this.LicenseService.allCategories()
    }
    @Get('/allLicense')
    allLicense():Promise<response>{
     return apiWrapper(()=>this.LicenseService.allLicense())
    }
    @Get('/allPackages')
    allPackages():Promise<response>{
     return apiWrapper(()=>this.LicenseService.allPackages())
    }
}
