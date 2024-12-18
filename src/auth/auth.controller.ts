import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDto, AuthSignUpDto, AuthUsername, ChangePassword, CheckOutDto, CreateMember, CreatePasswordDto, ForgetPasswordEmail } from './dto';
import { Public } from '../common/decorators/public.decorator';
import { Response } from 'express';
import { response } from 'src/common/types';
import { getId } from 'src/common/decorators/getUserIdThroughToken.decorator';
import { apiWrapper } from 'src/common/globalErrorHandlerClass';


@Controller('auth')
export class AuthController {
    constructor(private AuthService:AuthService){}


    @Public()
    @Post('/signUp')
    @HttpCode(200)
    signUp(@Body () dto: AuthSignUpDto):Promise<{ user?: any, message?:string, status:number}>{
        return apiWrapper(()=>this.AuthService.signUp(dto));
    }

    @Public()
    @Post('/signIn')
    @HttpCode(200)
    signIn(@Body () dto: AuthSignInDto):Promise<{ user?: any, accessToken?:string, message?:string, status:number}>{
       return apiWrapper(()=>this.AuthService.signIn(dto));
    }
    @Public()
    @Post('/username')
    @HttpCode(200)
    verifyUniqueUsername(@Body () dto: AuthUsername):Promise<{ message:string}>{
       return apiWrapper(()=>this.AuthService.verifyUniqueUsername(dto));
    }
    @Post('/changePassword')
    @HttpCode(200)
    changePassword(@getId('give me id') id:number,@Body () dto: ChangePassword):Promise<{status:number,message:string}>{
       return apiWrapper(()=>this.AuthService.changePassword(id, dto));
    }
    @Public()
    @Get('/emailVerification/:id')
    async emailVerification(@Param ('id') id:string, @Res() res: Response){
        try {
            await apiWrapper(()=>this.AuthService.emailVerification(id));
            res.redirect(process.env.FRONTEND_LOGIN_URL+'/login'); // Replace with your actual frontend login URL
        } catch (error) {
          // Handle errors, e.g., invalid token, user not found, etc.
          res.status(HttpStatus.BAD_REQUEST).send('Verification failed. Please contact support.');
        }
    }

    @Public()
    @Post('/forgetPassword')
    @HttpCode(200)
    forgetPasswordSendEmail(@Body () dto:ForgetPasswordEmail):Promise<response>{
       return apiWrapper(()=>this.AuthService.forgetPasswordSendEmail(dto.email));
    }
    @Public()
    @Post('/createNewPassword')
    @HttpCode(200)
    createNewPassword(@Body () dto:CreatePasswordDto):Promise<response>{
       return apiWrapper(()=>this.AuthService.createNewPassword(dto))
    }

    @Post('/checkOut')
    @HttpCode(200)
    checkOut(@getId('give me id') id:number,@Body () dto:CheckOutDto):Promise<response>{
       return apiWrapper(()=>this.AuthService.checkOut(id,dto))
    }
    @Post('/createMember')
    @HttpCode(200)
    creatMember(@getId('give me id') id:number,@Body () dto:CreateMember):Promise<response>{
       return apiWrapper(()=>this.AuthService.creatMember(id,dto))
    }
    @Get('/members/:type?')
    @HttpCode(200)
    getMembers(@getId('give me id') id:number, @Param('type') type:string):Promise<response>{
       return apiWrapper(()=>this.AuthService.getMembers(id, type))
    }

    @Public()
    @Get('/users')
    getUers(){
        return apiWrapper(()=>this.AuthService.getUsers());
    }
}
