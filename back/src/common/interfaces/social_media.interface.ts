import { Shelter } from "./shelter.interface";

export interface SocialMedia {
  id: number;
  type: string;
  url: string;
  icon: string;
  id_shelter: Shelter;
}
