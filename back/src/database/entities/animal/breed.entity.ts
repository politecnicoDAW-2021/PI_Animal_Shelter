import {
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  Entity,
} from 'typeorm';
import { SpecieEntity } from './specie.entity';
@Entity('breed')
export class BreedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => SpecieEntity, (specie) => specie.id)
  specie: SpecieEntity;
}
