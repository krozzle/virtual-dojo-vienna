import 'reflect-metadata';
import { ObjectType, ID, Field } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { metadata } from 'core-js/fn/reflect';

// export const ALLOWED_ROLES = {
//   MEMBER: 'MEMBER',
//   ORGA: 'ORGA',
//   ADMIN: 'ADMIN',
// };

@ObjectType()
@Entity()
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id!: number;

  // @Column()
  // @Field(() => String)
  // firstName: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  lastName: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @Field(() => String)
  email: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  password: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String)
  handle: string;

  @Column({ type: 'text', nullable: false })
  @Field(() => String)
  role: string;

  @Column({ type: 'boolean', nullable: false })
  @Field(() => Boolean)
  confirmed: boolean;

  // @Column({ type: 'varchar', nullable: false })
  // @Field(() => String)
  // mainGame: string;

  // @Column({ type: 'varchar', nullable: true })
  // @Field(() => String)
  // sideGame: string;

  // @CreateDateColumn()
  // @Field(() => Date)
  // createdAt!: Date;

  // @Column()
  // @Field(() => Date)
  // updatedAt!: Date;

  // @Column()
  // // @Field(type => Int)
  // age: number;
}
