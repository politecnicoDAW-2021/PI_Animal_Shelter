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
  accepteds?: any = [];

  ngOnInit(): void {
    this.adoptions = this.getAnimals();
    this.accepteds = this.getAccepteds();
  }

  getAnimals() {
    return this.adoption.getAdoptation().subscribe((adoption) => {
      this.adoptions = adoption;
    });
  }
  getAccepteds() {
    return this.adoption.getAcepteds().subscribe((accepted) => {
      this.accepteds = accepted;
    });
  }

  deleteAnimal(id: any) {
    return this.adoption.deleteAdoptation(id).subscribe(() => {
      this.adoptions.filter((adoption: any) => adoption.id !== id);
      this.accepteds.filter((adoption: any) => adoption.id !== id);
      this.getAnimals();
      this.getAccepteds();
    });
  }
  accept(id: number) {
    return this.adoption.putAdoptation(id).subscribe(() => {
      this.accepteds.filter((adoption: any) => adoption.id !== id);
      this.adoptions.filter((adoption: any) => adoption.id !== id);
      this.getAccepteds();
      this.getAnimals();
    });
  }
}
