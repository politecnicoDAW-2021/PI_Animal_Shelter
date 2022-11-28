import {
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  Body,
  StreamableFile,
  Req,
  ParseIntPipe,
  Res,
  Param,
} from '@nestjs/common';
import { get } from 'http';
import { AnimalService } from '../services/animal.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import multer from 'multer';
import { multerConfig } from '../utils/file-upload.utils';
import { Readable } from 'stream';

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
  async addAnimals(@Body() animal: any) {
    return this.animalService.addAnimals(animal);
  }

  @UseInterceptors(FileInterceptor('file', multerConfig))
  @Post('file')
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('filename', file.originalname);
    console.log('file', file);
    return await this.animalService.uploadFiles(
      body.idAnimal,
      file.buffer,
      file.originalname,
    );
  }

  @Get('file')
  async getDatabaseFileById(@Query() query: any) {
    console.log('id', query.id);
    const file = await this.animalService.getFileById(query.id);
    console.log('file', file);
    const stream = Readable.from(file.data);
    console.log('stream', stream);
    return new StreamableFile(stream);
  }
}

// @Get('file')
// getFile(FileInterceptor('file')): StreamableFile {
//   const file = createReadStream(join(process.cwd(), 'package.json'));
//   return new StreamableFile(file);
// }
