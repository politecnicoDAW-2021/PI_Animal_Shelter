import {
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  Body,
  StreamableFile,
} from '@nestjs/common';
import { get } from 'http';
import { AnimalService } from '../services/animal.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';

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
  @Post('animal')
  async addAnimals(@Query() animal: any) {
    return this.animalService.addAnimals(animal);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  uploadFile(@UploadedFile() file: Array<Express.Multer.File>) {
    return this.animalService.uploadFiles(file);
  }

  // @Get('file')
  // getFile(FileInterceptor('file')): StreamableFile {
  //   const file = createReadStream(join(process.cwd(), 'package.json'));
  //   return new StreamableFile(file);
  // }
}
