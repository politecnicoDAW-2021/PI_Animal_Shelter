import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ShelterService } from '@services/shelter/shelter.service';
import { Observable, startWith, map } from 'rxjs';
import { AnimalService } from '../../../services/animal/animal.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css'],
})
export class AnimalFormComponent implements OnInit {
  constructor(
    private animalService: AnimalService,
    private fb: FormBuilder,
    private shelterService: ShelterService,
    private http: HttpClient
  ) {}

  breeds: any[] = [];
  filteredBreeds: any;
  genders: any[] = ['Male', 'Female'];
  sizes: any[] = ['Large', 'Medium', 'Small'];
  shelters: any[] = [];

  animalId?: any;

  imageSnippet?: ImageSnippet;

  selectedFile?: File;
  fd = new FormData();

  animalForm = this.fb.group({
    name: [''],
    birthdate: [''],
    weight: [''],
    breed: [''],
    shelter: [''],
    description: [''],
    gender: [''],
    size: [''],
    urgent: [],
    dewormed: [],
    image: [''],
  });

  ngOnInit(): void {
    console.log(this.animalForm.value);

    this.getBreeds();
    this.getShelters();
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

  getShelters() {
    return this.shelterService.getShelter().subscribe((shelter) => {
      this.shelters = shelter;
    });
  }

  processFile(id: any, imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.imageSnippet = new ImageSnippet(event.target.result, file);
      this.animalService.upload(id, this.imageSnippet.file).subscribe();
    });

    reader.readAsDataURL(file);
  }

  sendData(imageInput?: any) {
    const dewormed = this.animalForm.get('dewormed')?.value ? true : false;
    const urgent = this.animalForm.get('urgent')?.value ? true : false;
    const shelter = localStorage.getItem('id');

    this.animalService
      .test({ ...this.animalForm.value, shelter, dewormed, urgent })
      .subscribe((animal: any) => {
        this.animalId = animal.raw.insertId;
        console.log('lara', this.animalId);
        this.processFile(this.animalId, imageInput);
        this.animalForm.reset();
      });
  }

  private _filter(value: string, elements: any[]): string[] {
    const filterValue = value.toLowerCase();
    return elements.filter((element) =>
      element.name.toLowerCase().includes(filterValue)
    );
  }
}
