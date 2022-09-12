import { Body, Controller, Get, Param, Post, Request, UseGuards } from "@nestjs/common";
import { UsersService } from "../services/users.service";


@Controller()
export class UserController {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Get('me/:id')
    async userInfo(
        //@Request() req: any
        @Param('id') id: any
    ){
        return await this.userService.findUserById(id)
        
    }

}