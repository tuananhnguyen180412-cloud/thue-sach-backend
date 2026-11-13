import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('staff')
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  staffCode: string; // Mã NV, backend tự sinh nếu không gửi

  @Column()
  fullName: string;

  @Column({ default: 'Nhân viên' })
  position: string;

  @Column()
  email: string;

  @Column({ default: 'Đang hoạt động' })
  status: string;
}