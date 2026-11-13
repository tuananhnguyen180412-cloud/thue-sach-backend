import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  category: string;

  @Column({ type: 'decimal', default: 0 })
  price: number;

  @Column({ default: 0 })
  stock: number;

  @Column({ default: 0 })
  total: number;

  @Column({ default: 0 })
  renting: number;
}