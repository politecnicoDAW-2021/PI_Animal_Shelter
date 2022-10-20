import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { AnimalService } from '../services/animal.service';

@Controller()
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('dogs')
  async dogs() {
    return await this.animalService.findDogs();
  }
  @Get('cats')
  async cats() {
    return await this.animalService.findCats();
  }
  @Get('animals')
  async animals() {
    return await this.animalService.findAnimals();
  }

  @Get('animal/:id')
  async animalId(@Param('id') id: any) {
    return await this.animalService.findAnimalById(id);
  }
}
