import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { authGaurd } from './common/guard/authGuard';
import { APP_GUARD } from '@nestjs/core';
import { MailModule } from './mail/mail.module';
import { ProfileModule } from './profile/profile.module';
import { QuestionsModule } from './questions/questions.module';
import { LicenseModule } from './liscense/license.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [AuthModule, PrismaModule, MailModule, ProfileModule, QuestionsModule, LicenseModule, MulterModule.register({dest:'./upload'})],
  providers: [{
    provide:APP_GUARD,
    useClass:authGaurd
  }],
  
})
export class AppModule {}
