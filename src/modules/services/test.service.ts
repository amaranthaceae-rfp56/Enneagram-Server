import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTestDto } from '../dto/test.dto';
import { TestRepository } from '../repositories/test.repository';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestRepository) private testRepository: TestRepository,
  ) {}

  async createTest(test: CreateTestDto) {
    const shuffleArray = function (array: number[]): number[] {
      const shuffledArray = [];
      for (let i = array.length; i > 0; i--) {
        const index = Math.floor(Math.random() * i);
        const question = array.splice(index, 1);
        shuffledArray.push(question[0] + 1);
      }
      return shuffledArray;
    };

    test.date = new Date().toJSON();
    test.questions = shuffleArray(Array.from(Array(261).keys()));
    return await this.testRepository.save(test);
  }

  async getTestByTestId(testId: number) {
    return await this.testRepository.findOne(testId);
  }

  async answerYesTestQuestion(testId: number, enneatype: number) {
    const test = await this.getTestByTestId(testId);
    test[enneatype] += 1;
    test.current_question += 1;
    return await test.save();
  }
  async answerNoTestQuestion(testId: number) {
    const test = await this.getTestByTestId(testId);
    test.current_question += 1;
    return await test.save();
  }

  async goBackATestQuestion(testId: number, enneatype: number) {
    const test = await this.getTestByTestId(testId);
    test[enneatype] -= 1;
    test.current_question -= 1;
    return await test.save();
  }
}
