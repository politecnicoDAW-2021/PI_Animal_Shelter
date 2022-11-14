import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAnimals = (): Observable<any[]> => {
    return this.http.get<any[]>(`${this.endpoint}/animals`);
  };

  getBreeds = (): Observable<any[]> => {
    return this.http.get<any[]>(`${this.endpoint}/breeds`);
  };

  getAnimalByParams = (breed: string, gender: string, city: string) => {
    return this.http.get<any[]>(
      `${this.endpoint}/animal-filters?breed=${breed}&gender=${gender}&city=${city}`
    );
  };
}
