import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { BreedEntity } from 'src/database/entities/animal/breed.entity';
import { MediaEntity } from 'src/database/entities/animal/media.entity';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { AdoptionEntity } from 'src/database/entities/common/adoption.entity';
import { ShelterEntity } from 'src/database/entities/shelter/shelter.entity';
import { SocialMediaEntity } from 'src/database/entities/shelter/social_media.entity';
import { CreditCardEntity } from 'src/database/entities/user/credit_card.entity';
import { PasswordEntity } from 'src/database/entities/user/password.entity';
import { UserEntity } from 'src/database/entities/user/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [
    CreditCardEntity,
    PasswordEntity,
    AdoptionEntity,
    UserEntity,
    SocialMediaEntity,
    ShelterEntity,
    AnimalEntity,
    BreedEntity,
    SpecieEntity,
    MediaEntity,
  ],
  synchronize: true,
};

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.PORT),
      username: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [
        CreditCardEntity,
        PasswordEntity,
        AdoptionEntity,
        UserEntity,
        SocialMediaEntity,
        ShelterEntity,
        AnimalEntity,
        BreedEntity,
        SpecieEntity,
        MediaEntity,
      ],
      synchronize: true,
    };
  },
};
