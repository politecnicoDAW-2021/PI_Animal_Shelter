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

  // @UseInterceptors(FileInterceptor('file', multerConfig))
  // @Post('file')
  // async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
  //   console.log('filename', file.originalname);
  //   console.log('file', file);
  //   return await this.animalService.uploadFiles(
  //     body.idAnimal,
  //     file.buffer,
  //     file.originalname,
  //   );
  // }

  @Post('upload-file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req: any, file, cb) => {
          const name = file.originalname.split('.')[0];
          const fileExtension = file.originalname.split('.')[1];
          const newFileName =
            name.split('').join('_') + '_' + Date.now() + '.' + fileExtension;

          cb(null, newFileName);
          const filesadfa = '../../';
        },
      }),
      fileFilter: (req: any, file: any, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)/)) {
          return cb(null, false);
        }
        cb(null, true);
      },
    }),
  )
  uploadFoto(@UploadedFile() file: Array<Express.Multer.File> | any) {
    console.log(file);

    if (!file) {
      throw new BadRequestException('File is not an image');
    } else {
      const response = {
        filePath: `http://localhost:3000/picture/${file.filename}`,
      };

      console.log(response);

      return response;
    }
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

  // @Get('file')
  // async getDatabaseFileById(@Query() query: any) {
  //   console.log('id', query.id);
  //   const file = await this.animalService.getFileById(query.id);
  //   console.log('file', file);
  //   const stream = Readable.from(file.data);
  //   console.log('stream', stream);
  //   return new StreamableFile(stream);
  // }
}

// @Get('file')
// getFile(FileInterceptor('file')): StreamableFile {
//   const file = createReadStream(join(process.cwd(), 'package.json'));
//   return new StreamableFile(file);
// }
