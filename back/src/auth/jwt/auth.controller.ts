import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
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

    @Post('login')
    async login(@Request() req: any) {
        
        return this.authService.login({
            email: req.body.email,
            password: req.body.password
        })
    }
}