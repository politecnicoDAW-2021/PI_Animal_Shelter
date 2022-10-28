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

  slideConfig = { slidesToShow: 4, slidesToScroll: 1 };

  ngOnInit(): void {
    console.log('animal', this.getAnimals());
  }

  addSlide() {
    this.animals.push();
  }

  removeSlide() {
    this.animals.length = this.animals.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
  animalCard() {}
  menuHandler: boolean = true;
  mdOptions: boolean = true;
  search: boolean = true;
  menuHandlerBtn() {
    this.menuHandler = !this.menuHandler;
  }
  mdOptionsToggle() {
    this.mdOptions = !this.mdOptions;
  }
  searchToggle() {
    this.search = !this.search;
  }

  logOut() {
    this.authService.logout();
  }

  getAnimals() {
    this.animalService
      .getAnimals()
      .subscribe((animals) => (this.animals = animals));
  }
}
