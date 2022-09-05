import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  register(user: any){
    return this.http.post(`${this.endpoint}/register`, user)
  }

  login(user: any){
    return this.http.post(`${this.endpoint}/login`, user)
  }
}
