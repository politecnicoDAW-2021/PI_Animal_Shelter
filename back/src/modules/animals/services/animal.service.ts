import {
  Body,
  Injectable,
  NotFoundException,
  StreamableFile,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { distinct } from 'rxjs';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { BreedEntity } from 'src/database/entities/animal/breed.entity';
import { MediaEntity } from 'src/database/entities/animal/media.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { Readable } from 'stream';

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
    const file: any = await this.getFileById(query.id);
    console.log(file);
    return await this.animalRepository.findBy({
      id: query.id,
      gender: query.gender,
      urgent: query.urgent,
      shelter: { id: query.city },
      breed: { specie: { name: query.breed }, id: query.specie },
    });
  }
  addAnimals(animal: any) {
    console.log(animal);
    return this.animalRepository.insert({
      name: animal.name,
      gender: animal.gender,
      breed: animal.breed,
      shelter: animal.shelter,
      weight: animal.weight,
      dewormed: animal.dewormed,
      urgent: animal.urgent,
      birthdate: animal.birthdate,
      description: animal.description,
    });
  }
  async uploadFiles(idAnimal: number, file: Buffer, filename: string) {
    const newFile = await this.mediaRepository.create({
      animal: { id: idAnimal },
      filename,
      data: file,
    });
    console.log(newFile);
    return await this.mediaRepository.save(newFile);
  }

  async getFileById(id: any) {
    console.log(id);
    const file = await this.mediaRepository.findOneBy({ id: id });
    // const stream = Readable.from(file.data);
    return file;
  }
}
