import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ShelterService } from '@services/shelter/shelter.service';
import { UserService } from '@services/users/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  public user?: any;
  public shelter?: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private shelterService: ShelterService
  ) {}

  ngOnInit(): void {
    this.loggedIn();
    this.getShelterInfo();
    if (localStorage.getItem('rol') === 'user') {
      this.getUserInfo();
    } else {
      this.getShelterInfo();
    }
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

  async getShelterInfo() {
    const email = localStorage.getItem('email');

    return (await this.shelterService.getShelterByEmail(email)).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      }
    );
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
}
