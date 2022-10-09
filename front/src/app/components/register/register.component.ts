import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  registerForm = this.fb.group({
    name: [''],
    surname: [''],
    username: [''],
    email: [''],
    city: [''],
    picture: 'default.jpg',
    password: [''],
    //file: []
  });

  ngOnInit(): void {}

  register() {
    this.authService.register(this.registerForm.value).subscribe();

    this.registerForm.reset();
  }
}
