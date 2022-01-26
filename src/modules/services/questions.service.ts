import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from '../repositories/questions.repository';
import { Question } from '../entities/questions.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async getQuestion(questionID: number) {
    return await this.questionRepository.findOne(questionID);
  }
  async getQuestionWithEnneatype(questionID: number) {
    return await this.questionRepository.findOne(questionID, {
      relations: ['enneatype'],
    });
  }
}
