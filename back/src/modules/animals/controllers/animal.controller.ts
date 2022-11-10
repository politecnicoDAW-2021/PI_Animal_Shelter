import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';
import { AnimalService } from '../services/animal.service';

@Controller()
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('animals')
  async animals() {
    return await this.animalService.findAnimals();
  }

  @Get('animal/:id')
  async animalId(@Param('id') id: any) {
    return await this.animalService.findAnimalById(id);
  }

  @Get('breeds')
  async breed() {
    return await this.animalService.findBreeds();
  }

  @Get('animal-breed/:breed')
  async animalByBreed(@Param('breed') breed: ObjectLiteral) {
    console.log('controller -> breed', breed);

    return await this.animalService.findAnimalsByBreed(breed);
  }
}
