import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, BeforeInsert } from 'typeorm';
import { AnimalEntity } from './animal.entity';
export type Breed = 'dog'| 'cat'| 'bird'| 'reptile'| 'rodent'| 'bunny'| 'ferret'| 'other';

@Entity('specie')
export class SpecieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ['dog', 'cat', 'bird', 'reptile','rodent','bunny','ferret','other'],
    default: ['other'],
  })
  breed: Breed;

  @OneToMany(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;
}
