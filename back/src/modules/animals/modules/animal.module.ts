import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/modules/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AnimalController } from '../controllers/animal.controller';

import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalService } from '../services/animal.service';
import { BreedEntity } from 'src/database/entities/animal/breed.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { MediaEntity } from 'src/database/entities/animal/media.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SpecieEntity,
      AnimalEntity,
      BreedEntity,
      MediaEntity,
    ]),
  ],
  providers: [AnimalService],
  controllers: [AnimalController],
  exports: [AnimalService],
})
export class AnimalModule {}
