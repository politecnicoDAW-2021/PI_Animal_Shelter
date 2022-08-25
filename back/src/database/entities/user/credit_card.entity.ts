import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, BeforeInsert } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('credit_card')
export class CreditCardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  card_number: string;

  @Column({nullable:true})
  date_expiry: string;

  @Column({nullable:true})
  cvc: string;

  @Column({nullable:true})
  cardholder: string;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    onDelete: 'CASCADE'
  })
  user: UserEntity;

}
