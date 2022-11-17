import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnimalService } from '@services/animal/animal.service';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-animal-section',
  templateUrl: './animal-section.component.html',
  styleUrls: ['./animal-section.component.css'],
})
export class AnimalSectionComponent implements OnInit {
  animals: any[] = [];
  options: any[] = [];
  filteredOptions: any;
  myControl = new FormControl('');

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimals();
    let form: any = document.getElementById('login');
    this.getBreeds();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  getAnimals = () => {
    return this.animalService
      .getAnimalByParams({
        breed: 'dog',
        gender: 'female',
      })
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  getBreeds() {
    this.animalService
      .getBreeds()
      .subscribe((animals) => (this.options = animals));
  }
}
