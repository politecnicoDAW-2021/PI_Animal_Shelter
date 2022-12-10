import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '@services/common/adopation.service';

@Component({
  selector: 'app-shelter-dashboard',
  standalone: true,
  templateUrl: './shelter-dashboard.component.html',
  styles: [],
  imports: [CommonModule],
})
export class ShelterDashboardComponent implements OnInit {
  constructor(private adoption: AdoptionService) {}

  adoptions?: any = [];

  ngOnInit(): void {
    this.adoptions = this.getAnimals();
  }

  getAnimals() {
    return this.adoption.getAdoptation().subscribe((adoption) => {
      this.adoptions = adoption;
      console.log(this.adoptions);
    });
  }
  deleteAnimal(id: number) {
    return this.adoption.deleteAdoptation(id);
  }
  accept(id: number) {
    return this.adoption.putAdoptation(id);
  }
}
