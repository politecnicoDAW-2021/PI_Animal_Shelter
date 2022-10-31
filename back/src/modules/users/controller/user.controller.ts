import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('me/:email')
  async userInfo(@Param('email') email: any) {
    return await this.userService.findOneByEmail(email);
  }
}
