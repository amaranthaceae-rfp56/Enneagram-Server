import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enneatype } from '../entities/enneatype.entity';
import { EnneatypeRepository } from '../repositories/enneatype.repository';

@Injectable()
export class EnneatypeService {
  constructor(
    @InjectRepository(EnneatypeRepository)
    private enneatypeRepository: EnneatypeRepository,
  ) {}

  async getEnneatypeQuestions(id: number): Promise<Enneatype> {
    return await this.enneatypeRepository.findOne(id, {
      relations: ['questions'],
    });
  }

  async getEnneatype(id: number): Promise<Enneatype> {
    return await this.enneatypeRepository.findOne(id);
  }
}