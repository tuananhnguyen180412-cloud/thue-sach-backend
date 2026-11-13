import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { Book } from '../entities/book.entity.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Post()
  create(@Body() bookData: Partial<Book>) {
    return this.booksService.create(bookData);
  }

  // API cập nhật sách: PUT http://localhost:3000/books/:id
  @Put(':id')
  update(@Param('id') id: string, @Body() bookData: Partial<Book>) {
    return this.booksService.update(+id, bookData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}