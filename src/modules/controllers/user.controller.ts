import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { TestService } from '../services/test.service';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private testService: TestService,
  ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  @Get('/:id')
  async getUserById(@Param('id') userId: number) {
    return await this.userService.getUserById(userId);
  }
  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string) {
    return await this.userService.getUserByEmail(email);
  }

  @Get('/:id/tests')
  async getUserTestsById(@Param('id') userId: number) {
    return await this.userService.getUserTestsById(userId);
  }

  @Get('/:id/last-test')
  async getLastTest(@Param('id') userId: number) {
    const user = await this.userService.getUserById(userId);
    return await this.testService.getTestByTestId(user.testId);
  }
}
