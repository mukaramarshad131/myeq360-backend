import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ChangeRoleDto, CreateRoleDto, profileDto } from './dto/profile.dto';
import { ProfileService } from './profile.service';
import { getId } from '../common/decorators/getUserIdThroughToken.decorator';
import { response } from '../common/types';
import { apiWrapper } from 'src/common/globalErrorHandlerClass';

@Controller('profile')
export class ProfileController {
constructor(private ProfileService:ProfileService){}

    @Post('/get/:id')
    @HttpCode(200)
    createProfile(@Param('id') id:string, @Body () dto: profileDto):Promise<{ user?: any, message?:string, status:number}>{
        return apiWrapper(()=>this.ProfileService.createProfile(id, dto))
    }
    @Post('/changeRole')
    @HttpCode(200)
    changeRole(@getId('give me id') id:number, @Body () dto: ChangeRoleDto):Promise<response>{
        return apiWrapper(()=>this.ProfileService.changeRole(id, dto))
    }
    @Post('/createRole')
    @HttpCode(200)
    createRole(@Body () dto: CreateRoleDto):Promise<response>{
        return apiWrapper(()=>this.ProfileService.createRole(dto));
    }
    @Get('/allRoles')
    @HttpCode(200)
    getAllRoles():Promise<response>{
        return apiWrapper(()=>this.ProfileService.getAllRoles());
    }
}
