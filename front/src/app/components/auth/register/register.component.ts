import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  shelterForm!: FormGroup;
  name!: FormControl;
  surname!: FormControl;
  username!: FormControl;
  email!: FormControl;
  city!: FormControl;
  password!: FormControl;
  submitted: boolean = false;

  nameShelter!: FormControl;
  emailShelter!: FormControl;
  cityShelter!: FormControl;
  passwordShelter!: FormControl;
  phone_number!: FormControl;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  openTab = 1;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  ngOnInit(): void {
    this.validators();
    this.registerForm = this.fb.group({
      name: this.name,
      surname: this.surname,
      username: this.username,
      email: this.email,
      city: this.city,
      picture: 'default.jpg',
      password: this.password,
      //file: []
    });

    this.shelterForm = this.fb.group({
      name: this.nameShelter,
      email: this.emailShelter,
      city: this.cityShelter,
      phone_number: this.phone_number,
      password: this.passwordShelter,
    });
  }

  validators() {
    this.name = new FormControl('', [Validators.required, Validators.min(3)]);

    this.surname = new FormControl('', [
      Validators.required,
      Validators.min(3),
    ]);

    this.username = new FormControl('', [
      Validators.required,
      Validators.min(4),
    ]);

    this.email = new FormControl('', [Validators.required, Validators.email]);

    this.city = new FormControl('', [Validators.required, Validators.min(3)]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.min(6),
    ]);
  }

  register() {
    if (this.registerForm.status === 'VALID') {
      this.submitted = true;
      this.authService
        .register(this.registerForm.value)
        .subscribe(() => this.router.navigate(['/home']));

      this.registerForm.reset();
    }
  }

  registerShelter() {
    this.authService
      .registerShelter(this.shelterForm.value)
      .subscribe(() => this.router.navigate(['/home']));
    this.shelterForm.reset();
  }

  async loginGoogle() {
    (await this.authService.googleGet()).subscribe(() =>
      this.router.navigate(['/home'])
    );
  }
}
