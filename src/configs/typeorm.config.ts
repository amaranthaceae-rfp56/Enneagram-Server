// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'schill',
//   password: 'password',
//   database: 'enneagram',
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: false,
//   logging: true,
// };

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-184-73-243-101.compute-1.amazonaws.com',
  port: 5432,
  username: 'rnxqjanyxdctvt',
  password: 'c4485ea2b91bff8b080b2e48126ca8551061725252dbe7fbe8d24e0cc44da75d',
  database: 'd4vs79qfu322uf',
  // url: 'postgres://rnxqjanyxdctvt:c4485ea2b91bff8b080b2e48126ca8551061725252dbe7fbe8d24e0cc44da75d@ec2-184-73-243-101.compute-1.amazonaws.com:5432/d4vs79qfu322uf',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  ssl: { rejectUnauthorized: false },
  synchronize: false,
  logging: true,
  // rejectUnauthorized: false,
};