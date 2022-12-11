import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AnimalEntity } from '../animal/animal.entity';
import { ShelterEntity } from '../shelter/shelter.entity';
import { UserEntity } from '../user/user.entity';

@Entity('adoption')
export class AdoptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 0,
  })
  is_adopted: boolean;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ManyToOne(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;

  @ManyToOne(() => ShelterEntity, (shelter) => shelter.id, {
    onDelete: 'CASCADE',
  })
  shelter: ShelterEntity;
}
