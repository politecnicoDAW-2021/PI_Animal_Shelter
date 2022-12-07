import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { BreedEntity } from 'src/database/entities/animal/breed.entity';
import { ShelterEntity } from 'src/database/entities/shelter/shelter.entity';
import { UserEntity } from 'src/database/entities/user/user.entity';
import { AdminController } from '../controllers/admin.controller';
import { AdminService } from '../services/admin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AnimalEntity,
      BreedEntity,
      UserEntity,
      ShelterEntity,
    ]),
  ],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [AdminService],
})
export class AdminModule {}
