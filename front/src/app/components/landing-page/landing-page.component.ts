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

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  slides = [
    { img: 'assets/gato1.jpg', name: 'Toby', place: 'Tarragona' },
    { img: 'assets/perro1.png', name: 'Toby', place: 'Tarragona' },
    { img: 'assets/gato2.jpeg', name: 'Toby', place: 'Tarragona' },
    { img: 'assets/perro2.jpg', name: 'Toby', place: 'Tarragona' },
    { img: 'assets/perro1.png', name: 'Toby', place: 'Tarragona' },
    { img: 'assets/gato2.jpeg', name: 'Toby', place: 'Tarragona' },
    { img: 'assets/perro2.jpg', name: 'Toby', place: 'Tarragona' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 1 };

  addSlide() {
    this.slides.push({
      img: 'assets/perro1.png',
      name: 'Toby',
      place: 'Tarragona',
    });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
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
  constructor() {}

  ngOnInit(): void {}
}
