import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { AnimalEntity } from "../animal/animal.entity";
import { UserEntity } from "../user/user.entity";



@Entity('wishlist')
export class WishlistEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity;

  @ManyToOne(() => AnimalEntity, (animal) => animal.id)
  animal: AnimalEntity;

}