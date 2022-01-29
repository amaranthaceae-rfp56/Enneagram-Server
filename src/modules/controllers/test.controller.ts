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
import { UserService } from '../services/user.service';

@Controller('test')
export class TestController {
  constructor(
    private testService: TestService,
    private userService: UserService,
  ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createTest(@Body() test: CreateTestDto) {
    const { userId, id } = await this.testService.createTest(test);
    return await this.userService.updateUsersTest(userId, id);
  }

  @Get(':id')
  async getTestByTestId(@Param('id') testId: number) {
    return await this.testService.getTestByTestId(testId);
  }

  @Put('answer/yes/:id/:enneatype')
  async answerYesTestQuestion(
    @Param('id') testId: number,
    @Param('enneatype') enneatype: number,
  ) {
    return this.testService.answerYesTestQuestion(testId, enneatype);
  }
  @Put('answer/no/:id')
  async answerNoTestQuestion(@Param('id') testId: number) {
    return this.testService.answerNoTestQuestion(testId);
  }
  @Put('back/:id/:enneatype')
  async goBackATestQuestion(
    @Param('id') testId: number,
    @Param('enneatype') enneatype: number,
  ) {
    return this.testService.goBackATestQuestion(testId, enneatype);
  }
}
