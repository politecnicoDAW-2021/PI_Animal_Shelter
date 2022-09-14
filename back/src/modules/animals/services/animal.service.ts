import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(SpecieEntity)
    private readonly animalRepository: Repository<SpecieEntity>,
  ) {}

  async createDog(specie:any): Promise<SpecieEntity> {
    return await this.animalRepository.save({name: specie,breed:'dog'});
  }
  async createCat(specie:any): Promise<SpecieEntity> {
    return await this.animalRepository.save({name: specie,breed:'cat'});
  }
  async createPrueba(specie:any): Promise<SpecieEntity> {
    console.log('creating prueba',specie);
    return await this.animalRepository.save({name: specie,breed:'other'});
  }
}
