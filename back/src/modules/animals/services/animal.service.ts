import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(SpecieEntity)
    private readonly specieRepository: Repository<SpecieEntity>,
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
  ) {}
  async findBreeds(): Promise<SpecieEntity[]> {
    return await this.specieRepository.find();
  }
  endpoint;
  async findAll(query: any) {
    return await this.animalRepository.findBy({
      id: query.id,
      gender: query.gender,
      urgent: query.urgent,
      shelter: { city: query.city },
      specie: { breed: query.breed, id: query.specie },
    });
  }
}
