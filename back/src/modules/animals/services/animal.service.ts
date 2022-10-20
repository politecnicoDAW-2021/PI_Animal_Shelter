import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { getConnection, Repository } from 'typeorm';

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

  async findAnimalById(id: any): Promise<AnimalEntity[]> {
    console.log('findAnimalById', id);
    return await this.animalRepository.findBy({ id: id });
  }
}
