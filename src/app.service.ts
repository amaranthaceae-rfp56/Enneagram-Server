import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getQuestion(questionID = 1): string {
    return `nothing`;
  }
}
