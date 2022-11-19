import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '@services/animal/animal.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { AnimalCardComponent } from '../animal-card/animal-card.component';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent],
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
  // @Input() dog!: any;
  // @Input() index!: any;
  animals: any[] = [];
  // options: any[] = [];
  // filteredOptions: any;
  // myControl = new FormControl('');

  constructor(public animalService: AnimalService) {}

  ngOnInit(): void {
    // console.log(this.getAnimals());
    // this.getAnimals();
    // console.log(this.animals);
    // this.getBreeds();
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value || ''))
    // );
    this.getAnimals();
  }

  getAnimals() {
    return this.animalService.getAllAnimals().subscribe((animals) => {
      this.animals = animals;
      console.log('this.animals', this.animals);
    });
  }

  // getBreeds() {
  //   this.animalService
  //     .getBreeds()
  //     .subscribe((animals) => (this.options = animals));
  // }

  // getAge = (date: string) => {
  //   let today = new Date();
  //   let birthDate = new Date(date);
  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   let m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age--;
  //   }
  //   return age;
  // };

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter((option) =>
  //     option.name.toLowerCase().includes(filterValue)
  //   );
  // }
}
