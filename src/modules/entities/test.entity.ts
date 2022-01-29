import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('tests')
export class Test extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'integer',
  })
  userId: number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '1': number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '2': number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '3': number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '4': number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '5': number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '6': number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '7': number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '8': number;

  @Column({
    type: 'integer',
    default: 0,
  })
  '9': number;

  @Column('int', {
    array: true,
  })
  questions: number[];

  @Column({
    type: 'integer',
    default: 0,
  })
  current_question: number;

  @Column({
    type: 'varchar',
  })
  date: string;

  @ManyToOne(() => User, (user) => user.tests)
  user: User;
}
