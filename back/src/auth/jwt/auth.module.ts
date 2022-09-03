import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/database/entities/user/user.entity';
import { UsersService } from 'src/modules/users/services/users.service';
import { UserModule } from 'src/modules/users/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';


@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: 
            { 
                expiresIn: '1d'
            }
        }),

        ConfigModule.forRoot({
            isGlobal: true
        }),

        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false
        })
        
    ],
    providers: [AuthService, JwtService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}
