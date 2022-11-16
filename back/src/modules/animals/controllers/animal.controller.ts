import { Controller, Get, Post, Query } from '@nestjs/common';
import { AnimalService } from '../services/animal.service';

@Controller()
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  @Get('breeds')
  async breed() {
    return await this.animalService.findBreeds();
  }
  @Get('animal')
  async findAll(@Query() query: any) {
    return this.animalService.findAll(query);
  }
}
