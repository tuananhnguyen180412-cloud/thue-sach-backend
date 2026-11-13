import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from '../entities/staff.entity.js';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  async findAll(): Promise<Staff[]> {
    return await this.staffRepository.find();
  }

  async create(staffData: Partial<Staff>): Promise<Staff> {
    const newStaff = this.staffRepository.create({
      ...staffData,
      // Tự sinh mã nhân viên nếu frontend không gửi, ví dụ NV-483920
      staffCode: staffData.staffCode || `NV-${Date.now().toString().slice(-6)}`,
      position: staffData.position || 'Nhân viên',
      status: staffData.status || 'Đang hoạt động',
    });
    return await this.staffRepository.save(newStaff);
  }

  async update(id: number, staffData: Partial<Staff>): Promise<Staff> {
    await this.staffRepository.update(id, staffData);
    const updatedStaff = await this.staffRepository.findOneBy({ id });
    if (!updatedStaff) {
      throw new Error('Không tìm thấy nhân sự');
    }
    return updatedStaff;
  }

  async remove(id: number): Promise<void> {
    await this.staffRepository.delete(id);
  }
}