import * as TypeORM from 'typeorm';
import { User } from './db/entity/User';

let connection;
export default function connect() {
  if (connection) {
    return connection;
  }
  connection = TypeORM.createConnection({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logger: 'advanced-console',
    dropSchema: true,
    entities: [User],
    migrations: [process.env.TYPEORM_MIGRATIONS],
    // subscribers: process.env.TYPEORM_SUBSCRIBERS,
    logging: 'all',
  });
  return connection;
}
