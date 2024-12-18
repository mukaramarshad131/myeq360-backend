import { PrismaService } from '../prisma/prisma.service';
import { ChangeRoleDto, CreateRoleDto, profileDto } from './dto/profile.dto';
import { Prisma } from '@prisma/client';
import { response } from 'src/common/types';
export declare class ProfileService {
    private Prisma;
    constructor(Prisma: PrismaService);
    createProfile(id: string, dto: profileDto): Promise<{
        user?: any;
        message?: string;
        status: number;
    }>;
    changeRole(id: number, dto: ChangeRoleDto): Promise<response>;
    createRole(dto: CreateRoleDto): Promise<response>;
    getAllRoles(): Promise<{
        status: number;
        message: string;
        list: {
            id: number;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            name: string;
            permissions: Prisma.JsonValue | null;
        }[];
    }>;
}
