import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('staff')
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  staffCode: string; // Mã NV (VD: NV-01)

  @Column()
  fullName: string;  // Họ tên

  @Column()
  position: string;  // Chức vụ (VD: Quản lý, Nhân viên vận hành)

  @Column()
  email: string;     // Email liên hệ

  @Column({ default: 'Đang hoạt động' })
  status: string;    // Trạng thái: Đang hoạt động, Tạm khóa
}