import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/database/entities/user/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async create(user: any): Promise<UserEntity>{
        return await this.userRepository.save(user)
    }

    async findOne(condition: any){
        return await this.userRepository.findOneBy({name: condition})
    }
}