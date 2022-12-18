import { HttpBackend, HttpClient } from '@angular/common/http';
import { Inject, Injectable, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';
import { map, mergeMap, pipe, take } from 'rxjs';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpLogin: HttpClient;
  endpoint: string = 'http://localhost:3000';
  googleLoginOptions = {
    scope: 'profile email',
  };

  constructor(
    private httpBack: HttpBackend,
    private http: HttpClient,
    private router: Router,
    private socialService: SocialAuthService
  ) {
    this.httpLogin = new HttpClient(this.httpBack);
  }

  register(user: any) {
    return this.http.post(`${this.endpoint}/register`, user);
  }

  registerShelter(shelter: any) {
    return this.http.post(`${this.endpoint}/registerShelter`, shelter);
  }

  login(user: any) {
    return this.httpLogin.post<any>(`${this.endpoint}/login`, user).pipe(
      map(async (user) => {
        if (user && user.access_token) {
          this.saveToken(user.access_token);
          this.saveId(user.id);
          this.saveEmail(user.username);
          this.saveRol(user.rol);
        }
      })
    );
  }

  loginShelter(shelter: any) {
    return this.httpLogin
      .post<any>(`${this.endpoint}/loginShelter`, shelter)
      .pipe(
        map(async (shelter) => {
          if (shelter && shelter.access_token) {
            this.saveToken(shelter.access_token);
            this.saveId(shelter.id);
            this.saveEmail(shelter.username);
            this.saveRol('shelter');
          }
        })
      );
  }

  async googleGet() {
    const user = await this.socialService.signIn(
      GoogleLoginProvider.PROVIDER_ID
    );

    return this.http.post<any>(`${this.endpoint}/googleLogin`, user).pipe(
      take(1),
      mergeMap(() => this.setTokens(user.idToken, user.email, 'user'))
    );
  }

  saveToken(access_token: string) {
    localStorage.setItem('token', access_token);
  }

  saveEmail(email: string) {
    localStorage.setItem('email', email);
  }

  async setTokens(tokens: any, email: any, rol: any) {
    localStorage.setItem('token', tokens);
    localStorage.setItem('email', email);
    localStorage.setItem('rol', rol);
  }

  async setTokenGoogle(tokens: any) {
    localStorage.setItem('token', tokens.authToken);
  }

  saveId(id: any) {
    localStorage.setItem('id', id);
  }

  saveRol(rol: string) {
    localStorage.setItem('rol', rol);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  isLoggedIn() {
    const authToken = localStorage.getItem('token');

    return authToken !== null;
  }

  getRol() {
    return localStorage.getItem('rol');
  }

  logout() {
    const storage = localStorage.clear();
    if (storage == null) {
      this.router.navigate(['login']);
    }
  }
}
