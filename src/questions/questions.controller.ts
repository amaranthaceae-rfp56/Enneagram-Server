import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  addQuestion(
    @Body('english') english: string,
    @Body('spanish') spanish: string,
    @Body('enneatype') enneatype: number,
  ): any {
    const result: any = this.questionsService.addQuestion(
      english,
      spanish,
      enneatype,
    );
    return { message: result };
  }

  @Get(':id')
  getQuestion(@Param('id') questionID: number): any {
    return this.questionsService.getQuestion(questionID);
  }
}
