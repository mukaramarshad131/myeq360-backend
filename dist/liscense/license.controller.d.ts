import { response } from '../common/types';
import { LicenseService } from './license.service';
import { LicenseCategory, LicenseDto, PackageDto } from './dto/license.dto';
export declare class LicenseController {
    private LicenseService;
    constructor(LicenseService: LicenseService);
    createLiscense(dto: LicenseDto, file: Express.Multer.File): Promise<any>;
    createPakages(dto: PackageDto, file: Express.Multer.File): Promise<any>;
    createLiscenseCategory(dto: LicenseCategory): Promise<response>;
    allCategories(): Promise<response>;
    allLicense(): Promise<response>;
    allPackages(): Promise<response>;
}
