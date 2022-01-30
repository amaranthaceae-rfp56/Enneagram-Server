import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { typeOrmConfig } from './configs/typeorm.config';
import { TestModule } from './modules/test.module';

@Module({
  imports: [TestModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
})
export class AppModule {}
