import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { AnimalService } from '@services/animal/animal.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { FooterComponent } from '@components/general/footer/footer.component';
@Component({
  selector: 'app-animal-view',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './animal-view.component.html',
  styleUrls: ['./animal-view.component.css'],
})
export class AnimalViewComponent implements OnInit {
  @Input() animal!: any;
  animal$!: Observable<any | undefined> | any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.animal = JSON.parse(params['animal']);
    });
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

  parseBirthdate = (date: string) => {
    return moment(date).locale('es').format('D MMMM YYYY');
  };
}
