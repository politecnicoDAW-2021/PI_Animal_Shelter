import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  BeforeInsert,
} from 'typeorm';
import { AnimalEntity } from './animal.entity';
import { BreedEntity } from './breed.entity';
@Entity('specie')
export class SpecieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;

  @ManyToOne(() => BreedEntity, (breed) => breed.id)
  breed: BreedEntity;
}
