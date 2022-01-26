import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Enneatype } from './enneatype.entity';

@Entity('questions')
export class Question extends BaseEntity{
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column({
    type: 'smallint',
  })
  enneatypeId: number;

  @Column({
    type: 'text',
  })
  english: string;

  @Column({
    type: 'text',
  })
  spanish: string;

  @ManyToOne(() => Enneatype, (enneatype) => enneatype.questions)
  enneatype: Enneatype;
}
