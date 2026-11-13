import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('members')
export class Member { // Sửa từ member thành Member
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  memberCode: string;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ default: 'Gói Linh Hoạt' })
  package: string;

  @Column({ default: '7/11/2026' })
  joinDate: string;

  @Column({ default: 'Đang hoạt động' })
  status: string;

}