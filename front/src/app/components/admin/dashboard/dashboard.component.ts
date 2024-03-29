import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '@services/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styles: [],
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  animalAmount?: number | any;
  breedAmount?: number | any;
  userAmount?: number | any;
  shelterAmount?: number | any;

  users?: any = [];
  animals?: any = [];

  ngOnInit(): void {
    this.animalAmount = this.countAnimals();
    this.breedAmount = this.countBreeds();
    this.userAmount = this.countUsers();
    this.shelterAmount = this.countShelters();
    this.users = this.getUsers();
    this.animals = this.getAnimals();
  }

  countAnimals() {
    return this.adminService
      .getAnimals()
      .subscribe((total) => (this.animalAmount = total));
  }

  getAnimals() {
    return this.adminService.getAnimalsData().subscribe((animal) => {
      this.animals = animal;
    });
  }

  countBreeds() {
    return this.adminService
      .getBreeds()
      .subscribe((total) => (this.breedAmount = total));
  }

  countUsers() {
    return this.adminService
      .getUsers()
      .subscribe((total) => (this.userAmount = total));
  }

  getUsers() {
    return this.adminService.getUsersData().subscribe((users) => {
      this.users = users;
    });
  }

  countShelters() {
    return this.adminService
      .getShelters()
      .subscribe((total) => (this.shelterAmount = total));
  }

  deleteAnimal(id: number) {
    return this.adminService.deleteAnimal(id).subscribe((animal) => {
      this.animals.filter((animal: any) => animal.id !== id);
      this.getAnimals();
    });
  }

  deleteUser(id: number) {
    return this.adminService.deleteUser(id).subscribe(() => {
      this.users.filter((user: any) => user.id !== id);
      this.getUsers();
    });
  }
}
