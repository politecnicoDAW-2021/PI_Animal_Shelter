import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterEntity } from 'src/database/entities/shelter/shelter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShelterService {
  constructor(
    @InjectRepository(ShelterEntity)
    private readonly shelterRepository: Repository<ShelterEntity>,
  ) {}

  findCities(): Promise<ShelterEntity[]> {
    return this.shelterRepository.find();
  }

  async create(shelter: any): Promise<any> {
    return await this.shelterRepository.save(shelter);
  }

  async findOneByEmail(condition: any): Promise<ShelterEntity> {
    return await this.shelterRepository.findOneBy({ email: condition });
  }
}
