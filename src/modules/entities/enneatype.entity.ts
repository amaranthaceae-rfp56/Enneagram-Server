import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './questions.entity';

@Entity('enneatype')
export class Enneatype extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  name_english: string;

  @Column({
    type: 'varchar',
  })
  name_spanish: string;

  @Column({
    type: 'varchar',
  })
  summary_english: string;

  @Column({
    type: 'varchar',
  })
  summary_spanish: string;

  @OneToMany(() => Question, (question) => question.enneatype)
  questions: Question[];
}
