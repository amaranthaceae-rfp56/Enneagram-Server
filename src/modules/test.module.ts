import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnneatypeController } from './controllers/enneatype.controller';
import { QuestionsController } from './controllers/questions.controller';
import { TestController } from './controllers/test.controller';
import { EnneatypeRepository } from './repositories/enneatype.repository';
import { QuestionRepository } from './repositories/questions.repository';
import { TestRepository } from './repositories/test.repository';
import { EnneatypeService } from './services/enneatype.service';
import { QuestionsService } from './services/questions.service';
import { TestService } from './services/test.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuestionRepository,
      EnneatypeRepository,
      TestRepository,
    ]),
  ],
  controllers: [QuestionsController, EnneatypeController, TestController],
  providers: [QuestionsService, EnneatypeService, TestService],
})
export class TestModule {}
