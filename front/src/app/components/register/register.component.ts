import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  registerForm = this.fb.group({
    username: [''],
    email: [''],
    city: [''],
    file: []
  })

  ngOnInit(): void {
  }

}
