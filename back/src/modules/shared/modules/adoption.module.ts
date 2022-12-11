import { TypeOrmModule } from '@nestjs/typeorm';

import { Module } from '@nestjs/common';
import { AdoptionController } from '../controllers/adoption.controller';
import { AdoptionService } from '../services/adoption.service';
import { AdoptionEntity } from 'src/database/entities/common/adoption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdoptionEntity])],
  providers: [AdoptionService],
  controllers: [AdoptionController],
  exports: [AdoptionService],
})
export class AdoptionModule {}
