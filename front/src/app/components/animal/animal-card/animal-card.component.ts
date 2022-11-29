import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css'],
})
export class AnimalCardComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() animal!: any;
  @Input() index!: any;

  ngOnInit(): void {}

  getAge = (date: string) => {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  sendAnimal(animal: any) {
    this.router.navigate([`/animal-details/${animal}}`], {
      queryParams: {
        animal: JSON.stringify(animal),
        skipLocationChange: false,
      },
    });
  }
}
