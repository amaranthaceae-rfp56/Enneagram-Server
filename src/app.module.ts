import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { QuestionsModule } from './modules/questions.module';

@Module({
  imports: [QuestionsModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
