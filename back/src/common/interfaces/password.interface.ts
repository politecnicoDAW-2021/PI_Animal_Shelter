import { User } from "./user.interface"

export interface Password{
    id: number
    password: string
    google_tk: string
    jwt_tk: string
    id_user: User
}