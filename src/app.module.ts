import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { TestModule } from './modules/test.module';

@Module({
  imports: [TestModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
