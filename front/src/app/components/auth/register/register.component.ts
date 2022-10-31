import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  name!: FormControl;
  surname!: FormControl;
  username!: FormControl;
  email!: FormControl;
  city!: FormControl;
  password!: FormControl;
  submitted: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

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
    console.log('formulario', this.registerForm.status);
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
      this.authService.register(this.registerForm.value).subscribe();
      this.registerForm.reset();
    }
  }
}
