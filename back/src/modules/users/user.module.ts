import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PasswordEntity } from "src/database/entities/user/password.entity";
import { UserEntity } from "src/database/entities/user/user.entity";
import { PasswordService } from "./services/password.service";
import { UsersService } from "./services/users.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, PasswordEntity])],
    providers: [UsersService, PasswordService],
    exports: [UsersService, PasswordService]
})
export class UserModule {}