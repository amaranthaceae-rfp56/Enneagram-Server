import { Controller, Get, Param } from '@nestjs/common';
import { EnneatypeService } from '../services/enneatype.service';

@Controller('enneatype')
export class EnneatypeController {
  constructor(private readonly enneatypeService: EnneatypeService) {}

  @Get('/:id')
  async getEnneatype(@Param('id') id: number) {
    return await this.enneatypeService.getEnneatype(id);
  }
}
