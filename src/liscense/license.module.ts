import { Module } from '@nestjs/common';
import { LicenseController } from './license.controller';
import { LicenseService } from './license.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  controllers: [LicenseController],
  providers: [LicenseService, PrismaService]
})
export class LicenseModule {}
