import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rental } from '../entities/rental.entity.js';

@Injectable()
export class RentalsService {
  constructor(
    @InjectRepository(Rental)
    private rentalsRepository: Repository<Rental>,
  ) {}

  async findAll(): Promise<Rental[]> {
    return await this.rentalsRepository.find();
  }

  async create(rentalData: Partial<Rental>): Promise<Rental> {
    const newRental = this.rentalsRepository.create(rentalData);
    return await this.rentalsRepository.save(newRental);
  }

  // Thêm hàm update đơn thuê
  async update(id: number, rentalData: Partial<Rental>): Promise<Rental> {
    await this.rentalsRepository.update(id, rentalData);
    const updatedRental = await this.rentalsRepository.findOneBy({ id });
    if (!updatedRental) {
      throw new Error('Không tìm thấy đơn thuê');
    }
    return updatedRental;
  }

  async remove(id: number): Promise<void> {
    await this.rentalsRepository.delete(id);
  }
}