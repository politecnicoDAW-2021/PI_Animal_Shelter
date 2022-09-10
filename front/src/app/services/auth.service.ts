import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  register(user: any){
    return this.http.post(`${this.endpoint}/register`, user)
  }

  login(user: any) {
    return this.http
      .post<any>(`${this.endpoint}/login`, user)
      .pipe(
        map(async (user) => {
          if (user && user.access_token) { 
            await (this.saveToken(user.access_token))
          }
        })
      );
  }

  saveToken(access_token: string){
    localStorage.setItem('token', access_token)
  }

  saveUser(user: string){
    localStorage.setItem('user', user)
  }

  saveId(id: any){
    localStorage.setItem('id', id)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    const authToken = localStorage.getItem('token')

    return authToken !== null
  }

  logout() {
    const removedToken = localStorage.removeItem('token');
    const removedUser = localStorage.removeItem('user');
    const removeIdUser = localStorage.removeItem('id');
    if (removedToken == null) {
      this.router.navigate(['login']);
    }
  }
}
