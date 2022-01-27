import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTestDto } from '../dto/test.dto';
import { TestService } from '../services/test.service';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createTest(@Body() test: CreateTestDto) {
    return await this.testService.createTest(test);
    // return test;
  }

  @Get(':id')
  async getTestByTestId(@Param('id') testId: number) {
    return await this.testService.getTestByTestId(testId);
  }

  @Put('answer/:id/:enneatype')
  async answerTestQuestion(
    @Param('id') testId: number,
    @Param('enneatype') enneatype: number,
  ) {
    return this.testService.answerTestQuestion(testId, enneatype);
  }
  @Put('back/:id/:enneatype')
  async goBackATestQuestion(
    @Param('id') testId: number,
    @Param('enneatype') enneatype: number,
  ) {
    return this.testService.goBackATestQuestion(testId, enneatype);
  }
}
