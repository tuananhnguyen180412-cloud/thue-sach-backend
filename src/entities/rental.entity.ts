import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rentals')
export class Rental {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rentalCode: string;

  @Column()
  memberName: string;

  @Column()
  bookTitle: string;

  @Column({ default: 'Đang thuê' }) // Trạng thái mặc định khi tạo mới
  status: string;

  @Column({ default: '13/11/2026' })
  borrowDate: string;
}