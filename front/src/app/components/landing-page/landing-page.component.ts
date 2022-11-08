import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { AuthService } from '../../services/auth.service';
import { AnimalService } from '../../services/animal/animal.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(
    private authService: AuthService,
    private animalService: AnimalService
  ) {}
  animals: any[] = [];
  slider: any;
  defaultTransform: any;

  ngOnInit(): void {
    this.getAnimals();
    //console.log('age: ' + this.getAge('2020-03-16'));

    this.defaultTransform = 0;
  }

  logOut() {
    this.authService.logout();
  }

  getAnimals() {
    return this.animalService
      .getAnimals()
      .subscribe((animals) => (this.animals = animals));
  }

  getAge(date: string) {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  goNext(id: any) {
    this.slider = document.getElementById(id);
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7)
      this.defaultTransform = 0;
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }
  goPrev(id: any) {
    this.slider = document.getElementById(id);
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }
}
