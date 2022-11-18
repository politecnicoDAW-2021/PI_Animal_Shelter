import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ShelterEntity } from 'src/database/entities/shelter/shelter.entity';
import { ShelterController } from '../controllers/shelter.controller';
import { ShelterService } from '../services/shelter.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterEntity])],
  providers: [ShelterService],
  controllers: [ShelterController],
  exports: [ShelterService],
})
export class ShelterModule {}
