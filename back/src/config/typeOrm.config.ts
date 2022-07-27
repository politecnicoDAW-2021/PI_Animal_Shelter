import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { AnimalEntity } from "src/database/entities/animal/animal.entity";
import { MediaEntity } from "src/database/entities/animal/media.entity";
import { SpecieEntity } from "src/database/entities/animal/specie.entity";
import { WishlistEntity } from "src/database/entities/common/wishlist.entity";
import { ShelterEntity } from "src/database/entities/shelter/shelter.entity";
import { SocialMediaEntity } from "src/database/entities/shelter/social_media.entity";
import { CreditCardEntity } from "src/database/entities/user/credit_card.entity";
import { PasswordEntity } from "src/database/entities/user/password.entity";
import { UserEntity } from "src/database/entities/user/user.entity";
export const typeOrmConfig :TypeOrmModuleOptions ={
    type: 'mysql',
    host: '146.59.155.183',
    port: 3306,
    username: 'lara',
    password: '1838Cisñ!',
    database: 'MoonPets',
    entities: [CreditCardEntity,
      PasswordEntity,
      WishlistEntity,
      UserEntity,
      SocialMediaEntity,
      ShelterEntity,
      AnimalEntity,
      SpecieEntity,
      MediaEntity,],
    synchronize: true,
  }