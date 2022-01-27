import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { QuestionsService } from '../services/questions.service';
@Controller('question')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get(':id')
  async getQuestion(@Param('id') questionID: number) {
    return await this.questionsService.getQuestion(questionID);
  }
  @Get(':id/enneatype')
  async getQuestionWithEnneatype(@Param('id') questionID: number) {
    return await this.questionsService.getQuestionWithEnneatype(questionID);
  }
}
