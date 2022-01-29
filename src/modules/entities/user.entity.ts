import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Test } from './test.entity';

@Entity('users')
export class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  first_name: string;

  @Column({
    type: 'varchar',
  })
  last_name: string;

  @Column({
    type: 'integer',
  })
  testId: number;

  @Column({
    type: 'boolean',
  })
  testing: boolean;

  @Column({
    type: 'integer',
  })
  primary_enneatype: number;

  @Column({
    type: 'varchar',
  })
  email: string;

  @OneToMany(() => Test, (test) => test.user)
  tests: Test[];
}
