import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy } from './strategies/AtStrategy';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { MailModule } from '../mail/mail.module';

@Module({
  imports:[JwtModule.register({global: true,
    secret: process.env.JWT_AT_SECRET,
    signOptions: { expiresIn: '48h' }}), MailModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AtStrategy]
})
export class AuthModule {}
