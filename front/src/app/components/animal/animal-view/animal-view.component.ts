import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { FooterComponent } from '@components/general/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { AdoptionService } from '@services/common/adopation.service';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private adoptionService: AdoptionService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.animal = JSON.parse(params['animal']);
    });
    //location.reload();
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
  adopt(animal: number) {
    console.log(animal);
    this.adoptionService.postAdoptation(animal);
    //this.router.navigate(['confirm']);
  }
}
