import { Shelter } from "src/modules/shelters/interfaces/shelter.interface"


export interface User{
    id: number
    name: string
    surname: string
    username: string
    email: string
    rol: string
    city: string
    picture: string
    id_shelter: Shelter
}