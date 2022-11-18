import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterEntity } from 'src/database/entities/shelter/shelter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShelterService {
  constructor(
    @InjectRepository(ShelterEntity)
    private readonly shelterEntity: Repository<ShelterEntity>,
  ) {}
  findCities(): Promise<ShelterEntity[]> {
    return this.shelterEntity.find();
  }
}
