import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MembersService } from './members.service.js';
import { Member } from '../entities/member.entity.js';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  findAll(): Promise<Member[]> {
    return this.membersService.findAll();
  }

  @Post()
  create(@Body() memberData: Partial<Member>): Promise<Member> {
    return this.membersService.create(memberData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() memberData: Partial<Member>): Promise<Member> {
    return this.membersService.update(Number(id), memberData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.membersService.remove(Number(id));
  }
}