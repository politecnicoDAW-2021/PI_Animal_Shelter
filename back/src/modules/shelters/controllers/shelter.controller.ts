import { Controller, Get, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { ShelterService } from '../services/shelter.service';

@Controller()
export class ShelterController {
  constructor(private readonly shelterService: ShelterService) {}
  @Get('shelter')
  shelters() {
    return this.shelterService.findCities();
  }
}
