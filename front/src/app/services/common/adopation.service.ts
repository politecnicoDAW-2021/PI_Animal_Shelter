import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdoptionService {
  private endpoint: string = 'http://localhost:3000/adoption';

  constructor(private http: HttpClient) {}

  putAdoptation(id: number): Observable<any[]> {
    const data: any = {};
    data.shelter = localStorage.getItem('id');
    data.id = id;
    return this.http.put<any[]>(`${this.endpoint}`, data);
  }
  postAdoptation(adoption: any): Observable<any[]> {
    const data: any = {};
    data.shelter = adoption.id[0].shelter_id;
    data.animal = adoption.animal.id;
    data.user = localStorage.getItem('id');
    return this.http.post<any[]>(`${this.endpoint}`, data);
  }

  getAdoptation(): Observable<any[]> {
    const id = localStorage.getItem('id');
    return this.http.get<any[]>(`${this.endpoint}/?id=${id}`);
  }
  getAcepteds(): Observable<any[]> {
    const id = localStorage.getItem('id');
    return this.http.get<any[]>(`${this.endpoint}/accepteds/?id=${id}`);
  }
  deleteAdoptation(id: any) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
