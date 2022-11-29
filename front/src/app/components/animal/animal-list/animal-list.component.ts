import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '@services/animal/animal.service';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AnimalCardComponent } from '../animal-card/animal-card.component';
import { ShelterService } from '@services/shelter/shelter.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { FooterComponent } from '@components/general/footer/footer.component';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [
    CommonModule,
    AnimalCardComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatAutocompleteModule,
  ],
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
  animals: Observable<any[]> = this.getAnimals();

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
    this.animals = this.animalService.getAnimalByParams({
      breed: this.filterForm.value.breed,
      specie: this.filterForm.value.specie,
      city: this.filterForm.value.city,
    });
  }
}
