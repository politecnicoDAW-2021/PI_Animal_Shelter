import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { distinct } from 'rxjs';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { BreedEntity } from 'src/database/entities/animal/breed.entity';
import { MediaEntity } from 'src/database/entities/animal/media.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';

import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(SpecieEntity)
    private readonly specieRepository: Repository<SpecieEntity>,
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
    @InjectRepository(BreedEntity)
    private readonly breedRepository: Repository<BreedEntity>,
    @InjectRepository(MediaEntity)
    private readonly mediaRepository: Repository<MediaEntity>,
  ) {}
  async findBreeds(): Promise<BreedEntity[]> {
    return await this.breedRepository.find();
  }
  async findSpecies(): Promise<SpecieEntity[]> {
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
      breed: { specie: { name: query.name }, id: query.specie },
    });
  }
  addAnimals(animal: any) {
    return this.animalRepository.insert(animal);
  }
  uploadFiles(files: any) {
    // files.
    return this.mediaRepository.create({});
  }
}
