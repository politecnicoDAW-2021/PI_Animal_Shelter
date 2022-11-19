import {
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  Entity,
} from 'typeorm';
import { BreedEntity } from './breed.entity';
@Entity('specie')
export class SpecieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => BreedEntity, (breed) => breed.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  breed: BreedEntity;
}
