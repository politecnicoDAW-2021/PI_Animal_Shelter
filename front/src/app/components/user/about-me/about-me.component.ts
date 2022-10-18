import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  public user?: any

  ngOnInit(): void {
   this.user = this.getUserInfo()
   
  }

  getUserInfo(){
    const id = localStorage.getItem('id')

    return this.userService.findById(id)
        .subscribe(data => this.user = data)
  }

}
