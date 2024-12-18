import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor();
    getUserWithDetails(id: number): Promise<{
        roles: {
            id: number;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            name: string;
            permissions: import("@prisma/client/runtime/library").JsonValue | null;
        }[];
        profile: {
            id: number;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            fName: string;
            lName: string;
            country: string;
            zip: string;
            userId: number;
            phone: string;
            city: string;
            state: string;
            address: string;
            bio: string;
            age: number | null;
            marital_status: string | null;
            language: string | null;
            education: string | null;
        };
        id: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        email: string;
        username: string;
        status: boolean;
        hashRt: string | null;
    }>;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
