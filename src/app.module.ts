import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Book } from './entities/book.entity.js';
import { Member } from './entities/member.entity.js';
import { Rental } from './entities/rental.entity.js';
import { Staff } from './entities/staff.entity.js'; // <-- 1. Thêm import Staff entity
import { BooksModule } from './books/books.module.js';
import { MembersModule } from './members/members.module.js';
import { RentalsModule } from './rentals/rentals.module.js';
import { StaffModule } from './staff/staff.module.js'; // <-- 2. Thêm import StaffModule

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Book, Member, Rental, Staff], // <-- 3. Thêm Staff vào entities
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    BooksModule,
    MembersModule,
    RentalsModule,
    StaffModule, // <-- 4. Thêm StaffModule vào imports
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}