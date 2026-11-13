import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RentalsService } from './rentals.service.js';
import { Rental } from '../entities/rental.entity.js';

@Controller('rentals')
export class RentalsController {
  constructor(private readonly rentalsService: RentalsService) {}

  @Get()
  findAll(): Promise<Rental[]> {
    return this.rentalsService.findAll();
  }

  @Post()
  create(@Body() rentalData: Partial<Rental>): Promise<Rental> {
    return this.rentalsService.create(rentalData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() rentalData: Partial<Rental>): Promise<Rental> {
    return this.rentalsService.update(Number(id), rentalData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.rentalsService.remove(Number(id));
  }
}