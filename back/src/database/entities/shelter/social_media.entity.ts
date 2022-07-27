import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { AnimalEntity } from '../animal/animal.entity';
import { UserEntity } from '../user/user.entity';
import { ShelterEntity } from './shelter.entity';

@Entity('social_media')
export class SocialMediaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  url: string;
  @Column()
  icon: string;
  @ManyToOne(() => ShelterEntity, (shelter) => shelter.id)
  shelter: ShelterEntity;
}
