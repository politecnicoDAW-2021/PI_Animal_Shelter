import {
  Body,
  Injectable,
  NotFoundException,
  StreamableFile,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { distinct } from 'rxjs';
import AdoptionEntity from 'src/database/entities/common/adoption.entity';
import { Readable } from 'stream';

import { Repository } from 'typeorm';

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(AdoptionEntity)
    private readonly adoptionRepository: Repository<AdoptionEntity>,
  ) {}

  addAdoption(adoption: any) {
    console.log(adoption);
    return this.adoptionRepository.insert({
      animal: { id: adoption.animal },
      user: { id: adoption.user },
    });
  }
  getAdoptables() {
    return this.adoptionRepository
      .createQueryBuilder('adoption')
      .leftJoinAndSelect('adoption.animal', 'animal')
      .leftJoinAndSelect('adoption.user', 'user')
      .select(
        'adoption.id, animal.id as animal_id , animal.name as name_animal,user.id as user_id, user.username as username',
      )
      .where('adoption.is_adopted = 0')
      .getRawMany();
  }
  adopt(id: any) {
    return this.adoptionRepository.update({ id: id }, { is_adopted: true });
  }

  async deleteAdoption(id: number) {
    return await this.adoptionRepository.delete({ id: id });
  }
}
