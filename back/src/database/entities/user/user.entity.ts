import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { WishlistEntity } from '../common/wishlist.entity';
import { ShelterEntity } from '../shelter/shelter.entity';

import { CreditCardEntity } from './credit_card.entity';
import { PasswordEntity } from './password.entity';
export type UserRol = 'admin' | 'user' | 'shelter';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'user', 'shelter'],
    default: 'user',
  })
  rol: UserRol;

  @Column()
  city: string;

  @Column()
  picture: string;
  
  @OneToMany(() => PasswordEntity, (password) => password.id)
  password: PasswordEntity;
  @OneToMany(() => WishlistEntity, (wishlist) => wishlist.id)
  wishlist: WishlistEntity;
  @OneToMany(() => CreditCardEntity, (creditCard) => creditCard.id)
  creditCard: CreditCardEntity;
  @ManyToOne(() => ShelterEntity, (shelter) => shelter.id)
  shelter: ShelterEntity;
}
