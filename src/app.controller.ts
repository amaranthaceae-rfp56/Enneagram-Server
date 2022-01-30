import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get('')
  helloWorld() {
    return 'Hello World';
  }
}
