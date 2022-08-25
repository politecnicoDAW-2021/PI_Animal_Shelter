import { Controller, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('register')
    async register(@Request() req: any) {
        
        return this.authService.register(req.body)
    }
}