import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StaffService } from './staff.service.js';
import { Staff } from '../entities/staff.entity.js';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  findAll(): Promise<Staff[]> {
    return this.staffService.findAll();
  }

  @Post()
  create(@Body() staffData: Partial<Staff>): Promise<Staff> {
    return this.staffService.create(staffData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() staffData: Partial<Staff>): Promise<Staff> {
    return this.staffService.update(Number(id), staffData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.staffService.remove(Number(id));
  }
}