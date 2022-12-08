import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  submitted: boolean = false;

  shelterForm!: FormGroup;
  emailShelter!: FormGroup;
  passwordShelter!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validators();
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password,
    });

    this.shelterForm = this.fb.group({
      email: this.emailShelter,
      password: this.passwordShelter,
    });
  }

  openTab = 1;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  validators() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  login() {
    this.submitted = true;
    return this.authService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }

  loginShelter() {
    this.submitted = true;
    return this.authService
      .loginShelter(this.shelterForm.value)
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
