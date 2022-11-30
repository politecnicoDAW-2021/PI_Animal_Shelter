import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  BeforeInsert,
} from 'typeorm';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
@Entity('password')
export class PasswordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true, length: 1500 })
  google_tk: string;

  @Column({ nullable: true, length: 1500 })
  twitter_tk: string;

  @Column({ nullable: true, length: 1500 })
  jwt_tk: string;

  /* @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity; */
  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  shelterId: number;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
