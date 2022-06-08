import { Shelter } from "./shelter.interface"

export interface User{
    id: number
    username: string
    email: string
    rol: string
    city: string
    picture: string
    id_shelter: Shelter
}