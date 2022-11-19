import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AnimalService } from '@services/animal/animal.service';
import { ShelterService } from '@services/shelter/shelter.service';

import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-animal-section',
  templateUrl: './animal-section.component.html',
  styleUrls: ['./animal-section.component.css'],
})
export class AnimalSectionComponent implements OnInit {
  animals$: Observable<any[]> = this.getAnimals();

  breeds: any[] = [];
  cities: any[] = [];
  species: any[] = [];

  filteredBreeds: any;
  filteredCities: any;
  filteredSpecies: any;

  myControl = new FormControl('');

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private shelterService: ShelterService
  ) {}
  filterForm = this.fb.group({
    breed: [''],
    specie: [''],
    city: [''],
  });
  ngOnInit(): void {
    //* Get Breeds */
    this.getBreeds();
    this.filteredBreeds = this.filterForm
      .get('breed')
      ?.valueChanges.pipe(
        map((value: any) => this._filter(value ?? '', this.breeds))
      );

    //* Get Cities */
    this.getCities();
    this.filteredCities = this.filterForm
      .get('city')
      ?.valueChanges.pipe(
        map((value: any) => this._filter(value ?? '', this.cities))
      );

    //* Get Species */
    this.getSpecies();
    this.filteredSpecies = this.filterForm
      .get('specie')
      ?.valueChanges.pipe(
        map((value: any) => this._filter(value ?? '', this.species))
      );
    console.log('species: ', this.filteredSpecies);
    console.log('cities: ', this.filteredCities);
  }

  getAnimals() {
    return this.animalService.getAnimalByParams({});
  }
  getBreeds() {
    this.animalService.getBreeds().subscribe((breed) => (this.breeds = breed));
  }

  getSpecies() {
    this.animalService
      .getSpecies()
      .subscribe((specie) => (this.species = specie));
  }
  getCities() {
    this.shelterService.getShelter().subscribe((city) => (this.cities = city));
  }

  private _filter(value: string, elements: any[]): string[] {
    console.log(elements);
    const filterValue = value.toLowerCase();
    return elements.filter((elements) =>
      elements.name.toLowerCase().includes(filterValue)
    );
  }
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
  public sendForm() {
    this.animals$ = this.animalService.getAnimalByParams({
      breed: this.filterForm.value.breed,
      specie: this.filterForm.value.specie,
      city: this.filterForm.value.city,
    });
  }
}
