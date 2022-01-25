import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnneatypeController } from './controllers/enneatype.controller';
import { QuestionsController } from './controllers/questions.controller';
import { EnneatypeRepository } from './repositories/enneatype.repository';
import { QuestionRepository } from './repositories/questions.repository';
import { EnneatypeService } from './services/enneatype.service';
import { QuestionsService } from './services/questions.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionRepository, EnneatypeRepository]),
  ],
  controllers: [QuestionsController, EnneatypeController],
  providers: [QuestionsService, EnneatypeService],
})
export class QuestionsModule {}
