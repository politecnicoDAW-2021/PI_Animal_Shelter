import { Injectable } from "@nestjs/common";
import { User } from "src/modules/users/interfaces/user.interface";
import { PasswordService } from "src/modules/users/services/password.service";
import { UsersService } from "src/modules/users/services/users.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private passwordService: PasswordService
    ) {}

    async register(user: any){       
        
        const existsUser = await this.userService.findOneByEmail(user.email)

        if(!existsUser){
            const userToRegister = await this.userService.create({
                name: user.name,
                surname: user.surname,
                username: user.username,
                email: user.email,
                rol: user.rol,
                city: user.city,
                picture: user.picture
            })

            const password = await this.passwordService.create({
                password: await bcrypt.hash(user.password, await bcrypt.genSalt()),
                google_tk: null,
                twitter_tk: null,
                jwt_tk: null,
                userId: userToRegister.id
            })

            return userToRegister
        }

        throw new Error('usuario ya existe')
    }   

    async login(user: any){
        
    }

} 