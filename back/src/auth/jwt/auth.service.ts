import { Injectable } from "@nestjs/common";
import { User } from "src/modules/users/interfaces/user.interface";
import { UsersService } from "src/modules/users/services/users.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
    ) {}
    

    async register(user: User){


        console.log('email', user.email);
        
        const existsUser = await this.userService.findOne(user.email)

        if(!existsUser) 
            return this.userService.create({
                name: user.name,
                surname: user.surname,
                username: user.username,
                email: user.email,
                rol: user.rol,
                city: user.city,
                picture: user.picture
            }) 

        throw new Error('usuario ya existe')
    }   

    async login(user: any){

    }

} 