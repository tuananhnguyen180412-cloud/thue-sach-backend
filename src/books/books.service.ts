import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity.js';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  // 1. Lấy danh sách tất cả sách (GET)
  findAll() {
    return this.bookRepository.find();
  }

  // 2. Thêm sách mới (POST)
  create(bookData: Partial<Book>) {
    const newBook = this.bookRepository.create(bookData);
    return this.bookRepository.save(newBook);
  }

  // 3. Xóa sách theo ID (DELETE)
  remove(id: number) {
    return this.bookRepository.delete(id);
  }

  // 4. Cập nhật thông tin sách theo ID (PUT/PATCH)
  update(id: number, bookData: Partial<Book>) {
    return this.bookRepository.update(id, bookData);
  }
}