import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-shelter-card',
  templateUrl: './shelter-card.component.html',
  styles: [],
  imports: [CommonModule],
})
export class ShelterCardComponent implements OnInit {
  @Input() shelter!: any;
  @Input() index!: any;

  constructor() {}

  ngOnInit(): void {
    console.log('a', this.shelter);
  }
}
