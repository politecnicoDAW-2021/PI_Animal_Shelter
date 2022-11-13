import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
  Query,
} from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
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

  //@Get('animal-breed/:breed')
  //@Get('animal-breed?')

  // @ApiQuery({
  //   name: 'breed',
  //   type: String,
  //   required: false,
  // })
  // @ApiQuery({
  //   name: 'gender',
  //   type: String,
  //   required: false,
  // })
  @Get('animal-breed?')
  async animalByBreed(
    @Query('breed') breed: ObjectLiteral,
    @Query('gender') gender: ObjectLiteral,
  ) {
    console.log('controller -> breed', breed);
    console.log('controller -> gender', gender);

    return await this.animalService.findAnimalsByFilters(breed, gender);
  }
}
