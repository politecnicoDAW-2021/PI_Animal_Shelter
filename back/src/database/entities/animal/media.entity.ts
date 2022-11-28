import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { AnimalEntity } from '../animal/animal.entity';

@Entity('media')
export class MediaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column({
    type: 'longblob',
  })
  data: Uint8Array;

  @ManyToOne(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;
}
