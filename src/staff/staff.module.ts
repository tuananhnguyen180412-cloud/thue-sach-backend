import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffController } from './staff.controller.js';
import { StaffService } from './staff.service.js';
import { Staff } from '../entities/staff.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Staff])],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}