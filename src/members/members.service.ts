import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../entities/member.entity.js';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}

  async findAll(): Promise<Member[]> {
    return await this.membersRepository.find();
  }

  async create(memberData: Partial<Member>): Promise<Member> {
    const newMember = this.membersRepository.create(memberData);
    return await this.membersRepository.save(newMember);
  }

  // Thêm hàm update
  async update(id: number, memberData: Partial<Member>): Promise<Member> {
    await this.membersRepository.update(id, memberData);
    const updatedMember = await this.membersRepository.findOneBy({ id });
    if (!updatedMember) {
      throw new Error('Không tìm thấy hội viên');
    }
    return updatedMember;
  }

  async remove(id: number): Promise<void> {
    await this.membersRepository.delete(id);
  }
}