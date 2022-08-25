import { Module } from '@nestjs/common';
import { UserEntity } from 'src/database/entities/user/user.entity';
import { UsersService } from 'src/modules/users/services/users.service';
import { UserModule } from 'src/modules/users/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [UserModule],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}
