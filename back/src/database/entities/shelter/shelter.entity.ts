import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { AnimalEntity } from '../animal/animal.entity';
import { AdoptionEntity } from '../common/adoption.entity';
import { UserEntity } from '../user/user.entity';
import { SocialMediaEntity } from './social_media.entity';

@Entity('shelter')
export class ShelterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  city: string;
  @Column({
    nullable: true,
  })
  phone_number: string;
  @OneToMany(() => UserEntity, (user) => user.id)
  user: UserEntity;
  @OneToMany(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;
  @OneToMany(() => SocialMediaEntity, (socialMedia) => socialMedia.id)
  socialMedia: SocialMediaEntity;
  @OneToMany(() => AdoptionEntity, (adoption) => adoption.id)
  adoption: AdoptionEntity;
}
