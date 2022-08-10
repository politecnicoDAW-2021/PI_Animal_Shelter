import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/database/entities/user/user.entity";
import { UsersService } from "./services/users.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UsersService],
    exports: [UsersService]
})
export class UserModule {}