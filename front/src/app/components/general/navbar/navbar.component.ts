import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/users/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  public user?: any;
  public text?: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.getUserInfo();
    console.log(this.user);
    this.loggedIn();
    this.refresh();
  }

  getUrl() {
    return this.router.url;
  }

  getUserInfo() {
    const email = localStorage.getItem('email');

    return this.userService.findByEmail(email).subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  signIn() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.authService.logout();
  }

  refresh() {
    return this.userService.findByEmail(localStorage.getItem('email'));
  }
}
