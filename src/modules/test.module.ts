import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnneatypeController } from './controllers/enneatype.controller';
import { QuestionsController } from './controllers/questions.controller';
import { TestController } from './controllers/test.controller';
import { UserController } from './controllers/user.controller';
import { EnneatypeRepository } from './repositories/enneatype.repository';
import { QuestionRepository } from './repositories/questions.repository';
import { TestRepository } from './repositories/test.repository';
import { UserRepository } from './repositories/user.repository';
import { EnneatypeService } from './services/enneatype.service';
import { QuestionsService } from './services/questions.service';
import { TestService } from './services/test.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuestionRepository,
      EnneatypeRepository,
      TestRepository,
      UserRepository,
    ]),
  ],
  controllers: [
    QuestionsController,
    EnneatypeController,
    TestController,
    UserController,
  ],
  providers: [QuestionsService, EnneatypeService, TestService, UserService],
})
export class TestModule {}
