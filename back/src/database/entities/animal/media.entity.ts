import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { AnimalEntity } from '../animal/animal.entity';
import { UserEntity } from '../user/user.entity';

@Entity('media')
export class MediaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;
}
