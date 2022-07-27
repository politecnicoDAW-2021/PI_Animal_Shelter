import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeOrm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnimalEntity } from './database/entities/animal/animal.entity';
import { SpecieEntity } from './database/entities/animal/specie.entity';
import { ShelterEntity } from './database/entities/shelter/shelter.entity';
import { CreditCardEntity } from './database/entities/user/credit_card.entity';
import { PasswordEntity } from './database/entities/user/password.entity';
import { WishlistEntity } from './database/entities/common/wishlist.entity';
import { UserEntity } from './database/entities/user/user.entity';
import { SocialMediaEntity } from './database/entities/shelter/social_media.entity';
import { MediaEntity } from './database/entities/animal/media.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([
      CreditCardEntity,
      PasswordEntity,
      WishlistEntity,
      UserEntity,
      SocialMediaEntity,
      ShelterEntity,
      AnimalEntity,
      SpecieEntity,
      MediaEntity,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
