import { HttpBackend, HttpClient } from '@angular/common/http';
import { Inject, Injectable, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { map, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private httpLogin: HttpClient
  endpoint: string = 'http://localhost:3000'

  constructor(
    httpBack: HttpBackend,
    private http: HttpClient,
    private router: Router,
  ) { this.httpLogin=new HttpClient(httpBack); }

  register(user: any){
    return this.http.post(`${this.endpoint}/register`, user)
  }

  login(user: any) {
      console.log(user);
    return this.httpLogin
      .post<any>(`${this.endpoint}/login`, user)
      .pipe(
        map(async (user) => {
          if (user && user.access_token) { 
            await (this.saveToken(user.access_token))
            console.log(user.access_token);
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
