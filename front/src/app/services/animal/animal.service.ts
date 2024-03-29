import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private endpoint: string = 'http://localhost:3000/animal';
  private endpointBreeds: string = 'http://localhost:3000/breeds';
  private endpointSpecies: string = 'http://localhost:3000/species';

  constructor(private http: HttpClient) {}

  getBreeds = (): Observable<any[]> => {
    return this.http.get<any[]>(`${this.endpointBreeds}`);
  };

  getSpecies = (): Observable<any[]> => {
    return this.http.get<any[]>(`${this.endpointSpecies}`);
  };

  getAnimalByParams = (params: any) => {
    let query = '';
    const asArray = Object.entries(params);
    params = asArray.filter(([_, value]) => value);

    if (params.length) {
      query = Object.keys(params)
        .reduce((accumulator, key) => {
          const option = accumulator !== '?' ? '&' : '';
          return `${accumulator}${option}${params[key]}`;
        }, '?')
        .replace(/,/g, '=');
    }
    return this.http.get<any[]>(`${this.endpoint}${query}`);
  };

  getAllAnimals() {
    return this.http.get<any[]>(`${this.endpoint}`);
  }

  addAnimal(animal: any) {
    return this.http.post<any[]>(`${this.endpoint}`, animal);
    // return this.http.post<any[]>('http://localhost:3000/upload-photo', {
    //   body: animal,
    //   'Content-Type': 'multipart/form-data',
    // });
  }

  getShelterByAnimal(id: any) {
    return this.http.get<any[]>(`${this.endpoint}/shelter/${id}`);
  }

  getAnimalImage() {
    return this.http.get<any[]>('http://localhost:3000/photo');
  }

  upload(id: any, image: File) {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.put(`http://localhost:3000/upload-photo/${id}`, formData);
  }

  test(animal: any) {
    return this.http.post('http://localhost:3000/animal', animal);
  }
}
