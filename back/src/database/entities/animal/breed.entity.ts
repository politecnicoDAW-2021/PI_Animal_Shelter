import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AnimalEntity } from './animal.entity';
import { SpecieEntity } from './specie.entity';
@Entity('breed')
export class BreedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;

  @ManyToOne(() => SpecieEntity, (specie) => specie.id)
  specie: SpecieEntity;
}
