import { Component, OnInit } from '@angular/core';
import { AnimalService } from '@services/animal/animal.service';

@Component({
  selector: 'app-animal-section',
  templateUrl: './animal-section.component.html',
  styleUrls: ['./animal-section.component.css'],
})
export class AnimalSectionComponent implements OnInit {
  animals: any[] = [];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals = () => {
    return this.animalService
      .getAnimalByParams('dog', 'male', 'Malaga')
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
}
