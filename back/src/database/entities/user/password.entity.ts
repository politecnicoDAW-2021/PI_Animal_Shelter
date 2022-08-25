import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, BeforeInsert } from 'typeorm';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
@Entity('password')
export class PasswordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  password: string;

  @Column({nullable:true})
  google_tk: string;

  @Column({nullable:true})
  twitter_tk: string;

  @Column({nullable:true})
  jwt_tk: string;

  @ManyToOne(() => UserEntity, (user) => user.id, {
    onDelete: 'CASCADE',
    onUpdate:  'CASCADE'
  })
  user: UserEntity;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
   }
}
