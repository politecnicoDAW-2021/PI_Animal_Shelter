import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { PasswordEntity } from 'src/database/entities/user/password.entity';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class PasswordService {
  constructor(
    @InjectRepository(PasswordEntity)
    private readonly passwordRepository: Repository<PasswordEntity>,
    @InjectDataSource() private dataSource: DataSource,
  ) {}

  async create(password: any): Promise<PasswordEntity> {
    return await this.passwordRepository.save(password);
  }

  async findOne(condition: any): Promise<PasswordEntity | any> {
    return await this.dataSource.query(
      `select password from password where userId = '${condition.id}'`,
    );
  }

  async findShelter(condition: any): Promise<PasswordEntity | any> {
    return await this.dataSource.query(
      `select password from password where shelterId = '${condition}'`,
    );
  }

  async findOneByGoogleId(condition: any): Promise<PasswordEntity | any> {
    return await this.passwordRepository.findOneBy({ userId: condition });
  }

  async findShelterByGoogleId(condition: any): Promise<PasswordEntity | any> {
    return this.passwordRepository.findOneBy({ shelterId: condition });
  }

  async update(userId: any, condition: any): Promise<any> {
    return await this.passwordRepository.update(
      {
        userId: userId,
      },
      {
        google_tk: condition,
      },
    );
  }

  async findOneByGoogleTk(condition: any): Promise<PasswordEntity | any> {
    return await this.passwordRepository.findOneBy({ google_tk: condition });
  }

  async findGoogleByUserId(condition: any): Promise<PasswordEntity | any> {
    return await this.passwordRepository.findOneBy({
      userId: condition,
    });
  }

  async createWithGoogle(data: any): Promise<PasswordEntity> {
    return await this.passwordRepository.save({
      google_tk: data.google_tk,
      userId: data.user.id,
    });
  }
}
