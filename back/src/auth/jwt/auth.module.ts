import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/database/entities/user/user.entity';
import { UsersService } from 'src/modules/users/services/users.service';
import { UserModule } from 'src/modules/users/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '1d'}
        })
    ],
    providers: [AuthService, JwtService],
    controllers: [AuthController],
    exports: [AuthService, JwtService]
})
export class AuthModule {}
