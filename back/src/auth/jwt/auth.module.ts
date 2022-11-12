import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/modules/users/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthMiddleware } from './middleware/auth.middleware';
//import { GoogleAuthService } from '../google/google-auth.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '1d',
      },
    }),

    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
  ],
  providers: [
    AuthService,
    //GoogleAuthService,
    JwtService,
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
  exports: [
    AuthService,
    //GoogleAuthService
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
