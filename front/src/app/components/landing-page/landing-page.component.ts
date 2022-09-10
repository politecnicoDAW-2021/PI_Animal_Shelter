

import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from './landing-page.animation'


@Component({
  selector: 'app-landing-page',
templateUrl: './landing-page.component.html',
 styleUrls: ['./landing-page.component.css'],
 animations: [slider],
 changeDetection: ChangeDetectionStrategy.OnPush
})

export class LandingPageComponent  implements OnInit {
  @Input() name!: string;
  imgags = [
    'assets/perro1.png','assets/perro2.jpg','assets/gato1.jpg','assets/gato2.jpeg'
  ];
  public carouselTileItems$!: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };
  tempData!: any[];
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(15),//Colocar aquí array
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }

}

