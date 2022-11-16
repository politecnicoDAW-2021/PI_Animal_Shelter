import { Controller, Get, Post, Query } from '@nestjs/common';
import { AnimalService } from '../services/animal.service';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  @Get()
  async findAll(@Query() query: any) {
    return this.animalService.findAll(query);
  }
}
