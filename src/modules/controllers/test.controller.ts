import {
  Body,
  Controller,
  Get,
  Param,
  Post,
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
}
