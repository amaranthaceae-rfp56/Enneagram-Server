import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import 'dotenv/config';
console.log(`\x1b[33m`,`This stands out`);
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
