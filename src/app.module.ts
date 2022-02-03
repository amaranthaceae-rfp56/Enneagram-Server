import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { TestModule } from './modules/test.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TestModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABSE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      ssl: { rejectUnauthorized: false },
      synchronize: false,
      logging: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
