import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AnimalEntity } from '../animal/animal.entity';
import { UserEntity } from '../user/user.entity';

@Entity('adoption')
export default class AdoptionEntity {
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
}
