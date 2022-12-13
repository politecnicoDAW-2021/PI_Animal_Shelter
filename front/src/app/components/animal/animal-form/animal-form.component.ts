import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ShelterService } from '@services/shelter/shelter.service';
import { Observable, startWith, map } from 'rxjs';
import { AnimalService } from '../../../services/animal/animal.service';
@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css'],
})
export class AnimalFormComponent implements OnInit {
  constructor(
    private animalService: AnimalService,
    private fb: FormBuilder,
    private shelterService: ShelterService
  ) {}

  breeds: any[] = [];
  filteredBreeds: any;
  genders: any[] = ['Male', 'Female'];
  sizes: any[] = ['Large', 'Medium', 'Small'];

  animalForm = this.fb.group({
    name: [''],
    birthdate: [''],
    weight: [''],
    breed: [''],
    shelter: [localStorage.getItem('id')],
    description: [''],
    gender: [''],
    size: [''],
    urgent: [],
    dewormed: [],
    image: [''],
  });

  ngOnInit(): void {
    this.getBreeds();
    this.filteredBreeds = this.animalForm
      .get('breed')
      ?.valueChanges.pipe(
        map((value: any) => this._filter(value ?? '', this.breeds))
      );
  }

  getBreeds() {
    return this.animalService.getBreeds().subscribe((breed) => {
      this.breeds = breed;
    });
  }

  private _filter(value: string, elements: any[]): string[] {
    const filterValue = value.toLowerCase();
    return elements.filter((element) =>
      element.name.toLowerCase().includes(filterValue)
    );
  }

  saveValues() {
    const dewormed = this.animalForm.get('dewormed')?.value ? true : false;
    const urgent = this.animalForm.get('urgent')?.value ? true : false;

    console.log(this.animalForm.value);

    return this.animalService
      .addAnimal({ ...this.animalForm.value, dewormed, urgent })
      .subscribe(() => {
        this.animalForm.reset();
      });
  }
}
