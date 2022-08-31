import { 
    ForbiddenException, 
    Injectable, 
    NestMiddleware 
} from "@nestjs/common";
import { verify } from 'jsonwebtoken';
import { UsersService } from "src/modules/users/services/users.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private readonly userService: UsersService
    ) {}


    async use(req: any, res: any, next: (error?: any) => void) {
        const bearerHeader = req.headers.authorization;
        const accessToken = bearerHeader && bearerHeader.split(' ')[1]
        let userEmail;

        if(!bearerHeader || !accessToken) {
            console.log('no hay tokens');
            
            return next();
        }

        try{
            const { email }: any = verify(
                accessToken,
                'secret'
            )

            userEmail = await this.userService.findOneByEmail(email)
        } catch (error) {
            throw new ForbiddenException('Please register or sign in')
        }

        if(userEmail){
            req.user = userEmail
        }

        next();
    }
}