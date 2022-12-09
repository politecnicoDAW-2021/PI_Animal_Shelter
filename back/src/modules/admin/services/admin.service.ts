import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { BreedEntity } from 'src/database/entities/animal/breed.entity';
import { ShelterEntity } from 'src/database/entities/shelter/shelter.entity';
import { UserEntity } from 'src/database/entities/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AnimalEntity)
    private readonly animalRepository: Repository<AnimalEntity>,
    @InjectRepository(BreedEntity)
    private readonly breedRepository: Repository<BreedEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ShelterEntity)
    private readonly shelterEntity: Repository<ShelterEntity>,
  ) {}

  async countAnimals(): Promise<any> {
    return await this.animalRepository.count();
  }

  async countBreeds(): Promise<any> {
    return await this.breedRepository.count();
  }

  async countUsers(): Promise<any> {
    return await this.userRepository.count();
  }

  async getUsers(): Promise<any> {
    return await this.userRepository.find();
  }

  async deleteUser(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }

  async countShelters(): Promise<any> {
    return await this.shelterEntity.count();
  }
}
