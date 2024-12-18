import { PrismaService } from '../prisma/prisma.service';
import { response } from '../common/types';
import { LicenseCategory, LicenseDto, PackageDto } from './dto/license.dto';
export declare class LicenseService {
    private Prisma;
    constructor(Prisma: PrismaService);
    createLiscense(filePath: string, dto: LicenseDto): Promise<response>;
    createPakages(filePath: string, dto: PackageDto): Promise<response>;
    createLiscenseCategory(dto: LicenseCategory): Promise<response>;
    allCategories(): Promise<any>;
    allPackages(): Promise<{
        list?: Record<string, any>[];
    } & response>;
    allLicense(): Promise<{
        list?: Record<string, any>[];
    } & response>;
}
