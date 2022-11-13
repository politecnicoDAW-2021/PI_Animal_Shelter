import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { ShelterEntity } from 'src/database/entities/shelter/shelter.entity';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(SpecieEntity)
    private readonly specieRepository: Repository<SpecieEntity>,
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
  ) {}

  async findDogs(): Promise<AnimalEntity[]> {
    return await this.animalRepository
      .createQueryBuilder('animal')
      .innerJoinAndSelect(SpecieEntity, 'specie', 'specie.id=animal.specieId')
      .where('breed="dog"')
      .getMany();
  }

  async findCats(): Promise<AnimalEntity[]> {
    return await this.animalRepository
      .createQueryBuilder('animal')
      .innerJoinAndSelect(SpecieEntity, 'specie', 'specie.id=animal.specieId')
      .where('breed="cat"')
      .getMany();
  }

  async findAnimals(): Promise<AnimalEntity[]> {
    return await this.animalRepository
      .createQueryBuilder('animal')
      .innerJoinAndSelect(SpecieEntity, 'specie', 'specie.id=animal.specieId')
      .getMany();
  }

  async findAnimalsByFilters(
    breed: ObjectLiteral,
    gender: ObjectLiteral,
    city: ObjectLiteral,
  ): Promise<AnimalEntity[]> {
    const animals = this.animalRepository
      .createQueryBuilder('animal')
      .innerJoinAndSelect(SpecieEntity, 'specie', 'specie.id=animal.specieId')
      .innerJoinAndSelect(
        ShelterEntity,
        'shelter',
        'shelter.id=animal.shelterId',
      );

    if (breed && gender && city) {
      animals
        .where(`gender = "${gender}"`)
        .andWhere(`breed = "${breed}"`)
        .andWhere(`city = "${city}"`);
      return animals.getMany();
    }

    if (!breed) {
      return animals.where(`gender = "${gender}"`).getMany();
    }

    if (!gender) {
      return animals.where(`breed = "${breed}"`).getMany();
    }
  }

  async findAnimalById(id: any): Promise<AnimalEntity[]> {
    console.log('findAnimalById', id);
    return await this.animalRepository.findBy({ id: id });
  }

  async findBreeds(): Promise<SpecieEntity[]> {
    return await this.specieRepository.find();
  }
}
