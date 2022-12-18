import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShelterService {
  private endpoint: string = 'http://localhost:3000/shelter';

  constructor(private http: HttpClient) {}

  getShelter = (): Observable<any[]> => {
    return this.http.get<any[]>(`${this.endpoint}`);
  };

  async getShelterByEmail(email: any) {
    return await this.http.get<any[]>(`${this.endpoint}/${email}`);
  }
}
