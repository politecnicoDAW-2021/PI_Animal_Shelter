import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Body,
  Query,
} from '@nestjs/common';
import { AdoptionService } from '../services/adoption.service';

@Controller('adoption')
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Post()
  async addAdoption(@Body() adoption: any) {
    return this.adoptionService.addAdoption(adoption);
  }
  @Get()
  async getAdoptables(@Query() query: any) {
    return this.adoptionService.getAdoptables(query);
  }

  @Get('/accepteds')
  async getAcepteds(@Query() query: any) {
    return this.adoptionService.getAcepteds(query);
  }

  @Put()
  async adopt(@Body() adoption: number) {
    return this.adoptionService.adopt(adoption);
  }

  @Delete('/:id')
  async deleteAdoption(@Param('id') id: any) {
    return this.adoptionService.deleteAdoption(id);
  }
}
