import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '100' })
  firstName: string;

  @Column({ type: 'varchar', length: '100' })
  lastName: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'boolean', default: false })
  confirmed: boolean;

  @Column()
  age: number;
}
