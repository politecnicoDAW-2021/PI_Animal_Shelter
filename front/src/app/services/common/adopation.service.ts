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
    return this.http.put<any[]>(`${this.endpoint}`, id);
  }
  postAdoptation(id: any): Observable<any[]> {
    console.log('llego');
    return this.http.post<any[]>(this.endpoint, id);
  }

  getAdoptation(): Observable<any[]> {
    return this.http.get<any[]>(`${this.endpoint}`);
  }
  deleteAdoptation(id: any): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
