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
        }
      })
    );
  }

  async googleGet() {
    const user = await this.socialService.signIn(
      GoogleLoginProvider.PROVIDER_ID
    );

    console.log(user);

    return this.http.post<any>(`${this.endpoint}/googleLogin`, user).pipe(
      take(1),
      mergeMap(() => this.setTokens(user.idToken, user.email))
    );
  }
  saveToken(access_token: string) {
    localStorage.setItem('token', access_token);
  }

  saveEmail(email: string) {
    localStorage.setItem('email', email);
  }

  async setTokens(tokens: any, email: any) {
    localStorage.setItem('token', tokens);
    localStorage.setItem('email', email);
  }

  async setTokenGoogle(tokens: any) {
    localStorage.setItem('token', tokens.authToken);
  }

  saveId(id: any) {
    localStorage.setItem('id', id);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    const authToken = localStorage.getItem('token');

    return authToken !== null;
  }

  logout() {
    const storage = localStorage.clear();
    if (storage == null) {
      this.router.navigate(['login']);
    }
  }
}
