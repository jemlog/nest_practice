import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '4321',
  database: 'nest_test',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true
};
