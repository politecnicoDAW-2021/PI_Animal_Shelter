
import { Shelter } from "src/modules/shelters/interfaces/shelter.interface"
import { Specie } from "./specie.interface"

export interface Animal{
    id: number
    name: string
    gender: string 
    dewormed: boolean
    size: string
    urgent: boolean
    description: string
    birthdate: Date
    weight: number 
    id_specie: Specie
    id_shelter: Shelter
}