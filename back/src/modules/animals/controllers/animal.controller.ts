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
  BadRequestException,
  Delete,
  Request,
} from '@nestjs/common';
import { get } from 'http';
import { AnimalService } from '../services/animal.service';
import { Express, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import multer, { diskStorage } from 'multer';
//import { multerConfig } from '../utils/file-upload.utils';
import { Readable } from 'stream';
import {
  isFileExtensionSafe,
  saveImageToStorage,
  removeFile,
} from '../../../helpers/image-storage.helper';
import { map, Observable, of, switchMap } from 'rxjs';
import { UpdateResult } from 'typeorm';

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

  @Delete('animal/:id')
  async deleteAnimal(@Param('id') id: number) {
    return this.animalService.deleteAnimal(id);
  }

  @Post('/upload-photo')
  @UseInterceptors(FileInterceptor('image', saveImageToStorage))
  uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Request() req: any,
  ): Observable<UpdateResult | { error: string }> {
    //console.log('req', req.body);

    console.log(file);

    const fileName = file?.filename;

    if (!fileName) return of({ error: 'File must be a png, jpg/jpeg' });

    const imagesFolderPath = join(process.cwd(), 'images');
    const fullImagePath = join(imagesFolderPath + '/' + file.filename);

    return isFileExtensionSafe(fullImagePath).pipe(
      switchMap((isFileLegit: boolean) => {
        if (isFileLegit) {
          const photo = this.animalService.updateAnimalPhoto(8, fileName);
          return photo;
        }
        removeFile(fullImagePath);
        return of({ error: 'File content doest not match extension!' });
      }),
    );
  }

  @Get('photo/:id')
  findImage(
    @Param('id') id: any,
    @Request() req: any,
    @Res() res: any,
  ): Observable<Object> {
    return this.animalService.findImageByAnimalId(id).pipe(
      switchMap((imageName: any) => {
        console.log('image', imageName);

        return of(res.sendFile(imageName, { root: './images' }));
      }),
    );
  }

  @Get('picture/:filename')
  async getPicture(@Param('filename') filename: any, @Res() res: Response) {
    res.sendFile(filename, { root: './uploads' });
  }

  @Get('animal/shelter/:id')
  getShelterByAnimal(@Param('id') id: any) {
    console.log('ey', id);
    return this.animalService.findShelterByAnimal(id);
  }
}
