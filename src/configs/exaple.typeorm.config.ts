import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'USERNAME',
  password: 'USER_PASSWORD',
  database: 'DATABASE_NAME',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
