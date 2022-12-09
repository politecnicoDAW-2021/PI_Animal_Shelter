import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AdminService } from '../services/admin.service';

@Controller()
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('count-animals')
  async countAnimals() {
    return await this.adminService.countAnimals();
  }

  @Get('count-breeds')
  async countBreeds() {
    return await this.adminService.countBreeds();
  }

  @Get('count-users')
  async countUsers() {
    return await this.adminService.countUsers();
  }

  @Get('users')
  async getUsers() {
    return await this.adminService.getUsers();
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: number) {
    return await this.adminService.deleteUser(id);
  }

  @Get('count-shelters')
  async countShelters() {
    return await this.adminService.countShelters();
  }
}
