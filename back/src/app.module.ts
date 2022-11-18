import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeOrm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger, Module } from '@nestjs/common';

import { AuthModule } from './auth/jwt/auth.module';
import { UserModule } from './modules/users/user.module';
import { AnimalEntity } from './database/entities/animal/animal.entity';
import { MediaEntity } from './database/entities/animal/media.entity';
import { SpecieEntity } from './database/entities/animal/specie.entity';
import { WishlistEntity } from './database/entities/common/wishlist.entity';
import { ShelterEntity } from './database/entities/shelter/shelter.entity';
import { SocialMediaEntity } from './database/entities/shelter/social_media.entity';
import { CreditCardEntity } from './database/entities/user/credit_card.entity';
import { PasswordEntity } from './database/entities/user/password.entity';
import { UserEntity } from './database/entities/user/user.entity';
import { AnimalModule } from './modules/animals/modules/animal.module';
import { ConfigModule } from '@nestjs/config';
import { ShelterModule } from './modules/shelters/modules/shelter.module';
import { BreedEntity } from './database/entities/animal/breed.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    TypeOrmModule.forFeature([
      CreditCardEntity,
      PasswordEntity,
      WishlistEntity,
      UserEntity,
      SocialMediaEntity,
      ShelterEntity,
      MediaEntity,
      BreedEntity,
      SpecieEntity,
      AnimalEntity,
    ]),
    UserModule,
    AuthModule,
    AnimalModule,
    ShelterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
