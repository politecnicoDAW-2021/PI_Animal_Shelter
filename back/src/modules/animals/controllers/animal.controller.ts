import { Controller, Get, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { AnimalService } from '../services/animal.service';

@Controller()
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  @Get('breeds')
  async breed() {
    return await this.animalService.findBreeds();
  }
  @Get('species')
  async specie() {
    return await this.animalService.findSpecies();
  }
  @Get('animal')
  async findAll(@Query() query: any) {
    return this.animalService.findAll(query);
  }
}
