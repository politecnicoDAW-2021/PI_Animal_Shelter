import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  findById(id: any): Observable<any[]>{
    return this.http.get<any[]>(`${this.endpoint}/me/${id}`);
  }
}
