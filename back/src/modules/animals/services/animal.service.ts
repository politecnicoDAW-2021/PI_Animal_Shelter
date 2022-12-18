import {
  Body,
  Injectable,
  NotFoundException,
  StreamableFile,
} from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Blob } from 'buffer';
import { distinct, from, lastValueFrom, map, Observable } from 'rxjs';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { BreedEntity } from 'src/database/entities/animal/breed.entity';
import { MediaEntity } from 'src/database/entities/animal/media.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { DataSource } from 'typeorm';

import { Repository, UpdateResult } from 'typeorm';

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
    @InjectDataSource() private dataSource: DataSource,
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
      breed: { specie: { id: query.specie }, id: query.breed },
    });
  }

  addAnimals(animal: any) {
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

  async deleteAnimal(id: number) {
    return await this.animalRepository.delete({ id: id });
  }

  async uploadFiles(idAnimal: number, file: Buffer, filename: string) {
    const newFile = await this.mediaRepository.create({
      animal: { id: idAnimal },
      filename,
      data: file,
    });
    return await this.mediaRepository.save(newFile);
  }
  findShelterByAnimal(idAnimal: any) {
    return this.animalRepository
      .createQueryBuilder('animal')
      .leftJoinAndSelect('animal.shelter', 'shelter')
      .select('shelter')
      .where('animal.id = ' + idAnimal)
      .getRawMany();
  }

  async saveAnimalPhoto(path: any): Promise<any[]> {
    const result = await this.mediaRepository
      .createQueryBuilder()
      .update(MediaEntity)
      .set({
        filename: path,
      })
      .where({ id: 1 })
      .returning('*')
      .execute();

    return result.raw;
  }

  updateAnimalPhoto(id: any, imagePath: any) {
    return this.animalRepository.update(id, { filename: imagePath });
  }

  findImageByAnimalId(id: any): Observable<string> | any {
    const animal = this.animalRepository.findOneBy({ id: id });

    return from(animal).pipe(
      map((an: any) => {
        return an.filename;
      }),
    );
  }
}
