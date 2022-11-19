import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { distinct } from 'rxjs';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { BreedEntity } from 'src/database/entities/animal/breed.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(SpecieEntity)
    private readonly breedRepository: Repository<SpecieEntity>,
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
    @InjectRepository(BreedEntity)
    private readonly specieRepository: Repository<BreedEntity>,
  ) {}
  async findBreeds(): Promise<SpecieEntity[]> {
    return await this.breedRepository.find();
  }
  async findSpecies(): Promise<BreedEntity[]> {
    return await this.specieRepository.find();
  }
  findCities(): Promise<AnimalEntity[]> {
    return this.animalRepository.find();
  }
  async findAll(query: any) {
    return await this.animalRepository.findBy({
      id: query.id,
      gender: query.gender,
      urgent: query.urgent,
      shelter: { id: query.city },
      specie: { breed: { name: query.name }, id: query.specie },
    });
  }
}
