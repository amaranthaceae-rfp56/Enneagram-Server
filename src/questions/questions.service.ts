import { Injectable } from '@nestjs/common';
import { Question } from './questions.model';
import { data } from '../../data';

@Injectable()
export class QuestionsService {
  question: Question;

  addQuestion(english: string, spanish: string, enneatype: number) {
    return `Added question: ENGLISH  ${english} ## SPANISH  ${spanish}  ## ENNEATYPE ${enneatype}`;
  }

  getQuestion(questionID: number) {
    return data[questionID - 1];
  }
}
