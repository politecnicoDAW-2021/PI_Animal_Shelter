import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PasswordEntity } from "src/database/entities/user/password.entity";
import { Repository } from "typeorm";

@Injectable()
export class PasswordService {
    constructor(
        @InjectRepository(PasswordEntity)
        private readonly passwordRepository: Repository<PasswordEntity>
    ) {}
    
    async create(password: any): Promise<PasswordEntity>{        
        return await this.passwordRepository.save(password)
    }

    async findOne(condition: any): Promise<PasswordEntity | any> {
        return await this.passwordRepository.findOneBy({
            password: condition
        })
    }


}