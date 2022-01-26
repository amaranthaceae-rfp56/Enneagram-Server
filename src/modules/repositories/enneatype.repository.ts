import { EntityRepository, Repository } from 'typeorm';
import { Enneatype } from '../entities/enneatype.entity';

@EntityRepository(Enneatype)
export class EnneatypeRepository extends Repository<Enneatype> {}
