import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { WishlistEntity } from '../common/wishlist.entity';
import { ShelterEntity } from '../shelter/shelter.entity';
import { MediaEntity } from './media.entity';
import { SpecieEntity } from './specie.entity';
export type Gender = 'male' | 'female' | 'unknown';
export type Size = 'small' | 'medium' | 'large' | 'large';

@Entity('animal')
export class AnimalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: ['male', 'female', 'unknown'],
    default: ['unknown'],
  })
  gender: Gender;

  @Column()
  weight: number

  @Column()
  dewormed: boolean;

  @Column({
    type: 'enum',
    enum: ['small', 'medium', 'large', 'giant'],
    default: ['medium'],
  })
  size: Size;
  @Column()
  urgent: boolean;

  @Column("text")
    description: string
    @Column("date")
    birthdate: Date
  @OneToMany(() => WishlistEntity, (wishlist) => wishlist.id)
  wishlist: WishlistEntity;
  @ManyToOne(() => SpecieEntity, (specie) => specie.id)
  specie: SpecieEntity;
  @ManyToOne(() => ShelterEntity, (shelter) => shelter.id)
  shelter : ShelterEntity;
  @OneToMany(() => MediaEntity, (media) => media.id)
  media: MediaEntity;
}
