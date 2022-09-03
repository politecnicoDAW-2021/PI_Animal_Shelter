import { Injectable } from "@nestjs/common";
import { User } from "src/modules/users/interfaces/user.interface";
import { PasswordService } from "src/modules/users/services/password.service";
import { UsersService } from "src/modules/users/services/users.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private passwordService: PasswordService,
        private jwtService: JwtService
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

        const userId = await this.userService.findOneByEmail(user.email)
        const payload = { email: user.email, sub: userId.id }

        return {
            username: user.email,
            id: userId.id,
            access_token: this.jwtService.sign(payload, { secret: 'secret' })
        }
    }

    async validateUser(email: any, password: any): Promise<any> {
        const user = this.userService.findOneByEmail(email)
        const pass = this.passwordService.findOne(password)

        if(user && await this.passwordsAreEqual((await pass).password, password)) {
            return {
                username: (await user).name,
                password: password
            }
        }

        return null
    }


    private async passwordsAreEqual(
        hashedPassword: string,
        plainPassword: string
    ): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword)
    }

} 