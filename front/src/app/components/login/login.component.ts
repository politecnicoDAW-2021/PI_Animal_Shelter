import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  clientId: string = '';
  handleCredentialResponse: any;
  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  ngOnInit(): void {}

  login() {
    return this.authService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

  async loginWithGoogle() {
    (await this.authService.googleGet()).subscribe(() =>
      this.router.navigate(['/home'])
    );
  }
}
