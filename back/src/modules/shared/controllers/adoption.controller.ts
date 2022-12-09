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
  Put,
} from '@nestjs/common';
import { AdoptionService } from '../services/adoption.service';

@Controller('adoption')
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Post()
  async addAdoption(@Body() adoption: any) {
    console.log('adoption', adoption);
    return this.adoptionService.addAdoption(adoption);
  }
  @Get()
  async getAdoptables() {
    return this.adoptionService.getAdoptables();
  }
  @Put('/:id')
  async adopt(@Param('id') id: number) {
    return this.adoptionService.adopt(id);
  }
  @Delete('/:id')
  async deleteAdoption(@Param('id') id: number) {
    return this.adoptionService.deleteAdoption(id);
  }
}
