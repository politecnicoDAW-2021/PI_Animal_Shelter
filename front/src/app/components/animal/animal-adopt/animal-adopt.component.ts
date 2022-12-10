import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@components/general/footer/footer.component';

@Component({
  selector: 'app-animal-adopt',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './animal-adopt.component.html',
  styles: [],
})
export class AnimalAdoptComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
