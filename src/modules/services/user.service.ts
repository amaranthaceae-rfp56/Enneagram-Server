import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(user: CreateUserDto) {
    return await this.userRepository.save(user);
  }

  async getUserById(userId: number) {
    return await this.userRepository.findOne(userId);
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ email });
  }
  async getUserTestsById(userId: number) {
    return await this.userRepository.findOne(userId, { relations: ['tests'] });
  }
  async updateUsersTest(userId: number, testId: number) {
    const user = await this.getUserById(userId);
    user.testId = testId;
    return await user.save();
  }
}
