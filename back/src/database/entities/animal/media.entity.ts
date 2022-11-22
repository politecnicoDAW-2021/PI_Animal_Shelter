import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { AnimalEntity } from '../animal/animal.entity';
import { UserEntity } from '../user/user.entity';

@Entity('media')
export class MediaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  // @Column({
  //   type: 'bytea',
  // })
  // data: Uint8Array;

  @ManyToOne(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;
}
