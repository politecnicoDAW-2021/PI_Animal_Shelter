import { User } from "./user.interface"

export interface Specie{
    id: number
    credit_number: string
    date_expiry: Date
    cvc: number
    card_holder: string
    id_user: User
}