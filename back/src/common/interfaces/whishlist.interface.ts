import { Animal } from "./animal.interface"
import { User } from "./user.interface"

export interface Wishlist{
    id: number
    id_user: User
    id_animal: Animal
}