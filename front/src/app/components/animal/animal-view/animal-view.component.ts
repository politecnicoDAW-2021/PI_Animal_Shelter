import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { AnimalService } from '@services/animal/animal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="details-panel" *ngIf="animal$ | async as animals">
      <img
        class="main-img"
        src="{{ animal.name }}"
        alt="Photo of
      {{ animal }}"
      />
      <article>
        <h1 class="main-text">Hi, I'm {{ animal.name }}</h1>
        <h2>
          My owner's is <span class="emphasize">{{ animal }}</span>
        </h2>
        <p>{{ animal }}</p>
        <p>
          I live in <span class="emphasize">{{ animal }}</span>
        </p>
      </article>
    </article>
  `,
  styleUrls: ['./animal-view.component.css'],
})
export class AnimalViewComponent implements OnInit {
  @Input() animal!: any;
  animal$!: Observable<any | undefined> | any;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animal$ = this.route.paramMap.pipe(
      map((param: any) => {
        return this.animalService.getAllAnimals().subscribe((animals) => {
          this.animal = animals[Number(param.get('index'))];
        });
      })
    );
  }

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
}
