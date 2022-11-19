import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal/animal.service';

@Component({
  selector: 'app-animals-landing',
  templateUrl: './animals-landing.component.html',
  styleUrls: ['./animals-landing.component.css'],
})
export class AnimalsLandingComponent implements OnInit {
  constructor(private animalService: AnimalService) {}

  animals: any[] = [];
  slider: any;
  defaultTransform: any;

  ngOnInit(): void {
    this.getAnimals();
    this.defaultTransform = 0;
  }

  getAnimals = () => {
    return this.animalService
      .getAnimalByParams({ urgent: true })
      .subscribe((animals) => (this.animals = animals));
  };

  getAge = (date: string) => {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  goNext = (id: any) => {
    this.slider = document.getElementById(id);
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7)
      this.defaultTransform = 0;
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  };

  goPrev = (id: any) => {
    this.slider = document.getElementById(id);
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  };
}
