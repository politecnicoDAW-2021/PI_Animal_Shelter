import { Component, OnInit } from '@angular/core';
import { ShelterService } from '@services/shelter/shelter.service';

@Component({
  standalone: true,
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styles: [],
})
export class ShelterListComponent implements OnInit {
  shelters: any[] = [];
  constructor(private shelterService: ShelterService) {}

  ngOnInit(): void {
    this.getShelters();
  }

  getShelters() {
    return this.shelterService.getShelter().subscribe((data) => {
      this.shelters = data;
      console.log(this.shelters);
    });
  }
}
