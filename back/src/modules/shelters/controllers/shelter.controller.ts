import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { ShelterService } from '../services/shelter.service';

@Controller('shelter')
export class ShelterController {
  constructor(private readonly shelterService: ShelterService) {}
  @Get()
  shelters() {
    return this.shelterService.findCities();
  }

  @Get('/:email')
  async shelterInfo(@Param('email') email: any) {
    return await this.shelterService.findOneByEmail(email);
  }
}
