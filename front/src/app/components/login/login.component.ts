import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })

  ngOnInit(): void {
  }

  

  login(){
    return this.authService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home'])
        }
      )
  }

}
