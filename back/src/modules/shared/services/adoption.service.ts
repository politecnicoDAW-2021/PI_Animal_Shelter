import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdoptionEntity } from 'src/database/entities/common/adoption.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(AdoptionEntity)
    private readonly adoptionRepository: Repository<AdoptionEntity>,
  ) {}

  addAdoption(adoption: any) {
    return this.adoptionRepository.insert({
      animal: { id: adoption.animal },
      user: { id: adoption.user },
      shelter: { id: adoption.shelter },
    });
  }
  getAdoptables(id_shelter: any) {
    return this.adoptionRepository
      .createQueryBuilder('adoption')
      .leftJoinAndSelect('adoption.animal', 'animal')
      .leftJoinAndSelect('adoption.user', 'user')
      .select(
        'adoption.shelter as shelter_id,adoption.id, animal.id as animal_id , animal.name as name_animal,user.id as user_id, user.username as username',
      )
      .where(
        'adoption.is_adopted = 0 and adoption.shelterId = ' + id_shelter.id,
      )
      .getRawMany();
  }
  getAcepteds(id_shelter: any) {
    return this.adoptionRepository
      .createQueryBuilder('adoption')
      .leftJoinAndSelect('adoption.animal', 'animal')
      .leftJoinAndSelect('adoption.user', 'user')
      .select(
        'adoption.shelter as shelter_id,adoption.id, animal.id as animal_id , animal.name as name_animal,user.id as user_id, user.username as username',
      )
      .where(
        'adoption.is_adopted = 1 and adoption.shelterId = ' + id_shelter.id,
      )
      .getRawMany();
  }
  adopt(adoption: any) {
    return this.adoptionRepository.update(
      { id: adoption.id },
      { is_adopted: true },
    );
  }

  deleteAdoption(id: any) {
    return this.adoptionRepository.delete({ id: id });
  }
}
