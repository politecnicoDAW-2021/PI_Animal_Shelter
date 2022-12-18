import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { FooterComponent } from '@components/general/footer/footer.component';
import { MatDialog } from '@angular/material/dialog';
import { AdoptionService } from '@services/common/adopation.service';
import { AnimalService } from '@services/animal/animal.service';
import { AuthService } from '@services/auth.service';
@Component({
  selector: 'app-animal-view',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './animal-view.component.html',
})
export class AnimalViewComponent implements OnInit {
  @Input() animal!: any;
  animal$!: Observable<any | undefined> | any;
  shelter: any[] = [];
  url: string = window.location.href;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private adoptionService: AdoptionService,
    private animalService: AnimalService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.animal = JSON.parse(params['animal']);
    });
    //location.reload();
    this.getShelterByAnimal();
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
    const id = this.shelter;
    this.adoptionService.postAdoptation({ animal, id }).subscribe();
    this.router.navigate(['confirm']);
  }
  getShelterByAnimal() {
    this.animalService
      .getShelterByAnimal(this.animal.id)
      .subscribe((shelter) => (this.shelter = shelter));
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }
  redirectionLogin() {
    this.router.navigate(['login']);
  }
}
