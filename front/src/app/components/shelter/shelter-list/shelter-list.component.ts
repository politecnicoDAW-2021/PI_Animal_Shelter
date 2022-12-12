import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@components/general/footer/footer.component';
import { ShelterService } from '@services/shelter/shelter.service';
import { Observable } from 'rxjs';
import { ShelterCardComponent } from '../shelter-card/shelter-card.component';

@Component({
  standalone: true,
  selector: 'app-shelter-list',
  templateUrl: './shelter-list.component.html',
  styles: [],
  imports: [CommonModule, ShelterCardComponent, FooterComponent],
})
export class ShelterListComponent implements OnInit {
  shelters: Observable<any[]> = this.getShelters();

  constructor(private shelterService: ShelterService) {}

  ngOnInit(): void {
    this.getShelters();
  }

  getShelters() {
    return this.shelterService.getShelter();
  }
}
