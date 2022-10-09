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
}
