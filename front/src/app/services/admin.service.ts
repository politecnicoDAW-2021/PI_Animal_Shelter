import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAnimals() {
    return this.http.get<any[]>(`${this.endpoint}/count-animals`);
  }

  getAnimalsData() {
    return this.http.get<any[]>(`${this.endpoint}/animal`);
  }

  getBreeds() {
    return this.http.get<any[]>(`${this.endpoint}/count-breeds`);
  }

  getUsers() {
    return this.http.get<any[]>(`${this.endpoint}/count-users`);
  }

  getUsersData() {
    return this.http.get<any[]>(`${this.endpoint}/users`);
  }

  getShelters() {
    return this.http.get<any[]>(`${this.endpoint}/count-shelters`);
  }

  deleteAnimal(id: number) {
    return this.http.delete(`${this.endpoint}/animal/${id}`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/user/${id}`);
  }
}
