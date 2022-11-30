import {
  Body,
  Controller,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Request() req: any) {
    return this.authService.register(req.body);
  }

  @Post('registerShelter')
  async registerShelter(@Request() req: any) {
    return this.authService.registerShelter(req.body);
  }

  @Post('login')
  async login(@Request() req: any) {
    return this.authService.login({
      email: req.body.email,
      password: req.body.password,
    });
  }

  @Post('loginShelter')
  async loginShelter(@Request() req: any) {
    console.log(req.body);

    return this.authService.loginShelter({
      email: req.body.email,
      password: req.body.password,
    });
  }

  @Post('googleLogin')
  async googleLogin(@Request() req: any) {
    return await this.authService.loginThirdParty(req.body);
  }
}
