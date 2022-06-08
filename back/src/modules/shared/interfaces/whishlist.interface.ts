import { Animal } from "src/modules/animals/interfaces/animal.interface"
import { User } from "src/modules/users/interfaces/user.interface"


export interface Wishlist{
    id: number
    id_user: User
    id_animal: Animal
}