import 'reflect-metadata';
import { ObjectType, ID, Field } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from 'typeorm';

export const ALLOWED_ROLES = {
  MEMBER: 'MEMBER',
  ORGA: 'ORGA',
  ADMIN: 'ADMIN',
};

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @Field(() => String)
  email: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  firstName: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  lastName: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  password: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  handle: string;

  @Column({
    type: 'enum',
    nullable: false,
    enum: Object.values(ALLOWED_ROLES),
    default: ALLOWED_ROLES.MEMBER,
  })
  @Field(() => String)
  role: string;

  @Column({ type: 'boolean', nullable: false })
  @Field(() => Boolean)
  confirmed: boolean;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  mainGame: string;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String)
  sideGame: string;

  @CreateDateColumn({ nullable: false })
  @Field(() => Date)
  createdAt!: Date;

  @UpdateDateColumn({ nullable: false })
  @Field(() => Date)
  updatedAt: Date;

  @Column({ type: 'boolean', nullable: false })
  @Field(type => Boolean)
  isActive: boolean;
}
