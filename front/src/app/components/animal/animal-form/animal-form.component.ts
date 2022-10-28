import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { AnimalService } from '../../../services/animal/animal.service';
@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css'],
})
export class AnimalFormComponent implements OnInit {
  constructor(private animalService: AnimalService) {}

  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions: any;

  ngOnInit(): void {
    let form: any = document.getElementById('login');
    this.getBreeds();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    // form.addEventListener(
    //   'submit',
    //   function (event: any) {
    //     event.preventDefault();
    //     let elements = form.elements;
    //     let payload = {};
    //     for (let i = 0; i < elements.length; i++) {
    //       let item = elements.item(i);
    //       switch (item.type) {
    //         case 'checkbox':
    //           //payload[item.name] = item.checked;
    //           break;
    //         case 'submit':
    //           break;
    //         default:
    //           //payload[item.name] = item.value;
    //           break;
    //       }
    //     }
    //     // Place your API call here to submit your payload.
    //     // console.log('payload', payload);
    //   },
    //   true
    // );
  }

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
