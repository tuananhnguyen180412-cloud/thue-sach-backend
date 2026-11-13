import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalsController } from './rentals.controller.js';
import { RentalsService } from './rentals.service.js';
import { Rental } from '../entities/rental.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Rental])],
  controllers: [RentalsController],
  providers: [RentalsService],
})
export class RentalsModule {}