import { ChangeRoleDto, CreateRoleDto, profileDto } from './dto/profile.dto';
import { ProfileService } from './profile.service';
import { response } from '../common/types';
export declare class ProfileController {
    private ProfileService;
    constructor(ProfileService: ProfileService);
    createProfile(id: string, dto: profileDto): Promise<{
        user?: any;
        message?: string;
        status: number;
    }>;
    changeRole(id: number, dto: ChangeRoleDto): Promise<response>;
    createRole(dto: CreateRoleDto): Promise<response>;
    getAllRoles(): Promise<response>;
}
