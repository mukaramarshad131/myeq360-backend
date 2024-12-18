import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
declare const authGaurd_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class authGaurd extends authGaurd_base {
    private jwtService;
    private reflector;
    constructor(jwtService: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
export {};
