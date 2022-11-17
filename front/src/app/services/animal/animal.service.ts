import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private endpoint: string = 'http://localhost:3000/animal';
  private endpointBreeds: string = 'http://localhost:3000/breeds';

  constructor(private http: HttpClient) {}

  getBreeds = (): Observable<any[]> => {
    return this.http.get<any[]>(`${this.endpointBreeds}`);
  };

  getAnimalByParams = (params: any) => {
    let query = '';
    const asArray = Object.entries(params);
    params = asArray.filter(([key, value]) => {
      return value !== undefined;
    });
    if (params.length) {
      console.log(params);
      query = Object.keys(params)
        .reduce(function (accumulator, key) {
          return accumulator != '?'
            ? accumulator.toString() + '&' + params[key].toString()
            : accumulator.toString() + params[key].toString();
        }, '?')
        .replace(/,/g, '=');
    }
    console.log(query);
    return this.http.get<any[]>(`${this.endpoint}${query}`);
  };
}
