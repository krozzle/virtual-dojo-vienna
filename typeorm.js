import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import * as TypeORM from 'typeorm';
import { User } from './db/entity/User';

// ! this one below works (shout outs to @karlhorky)
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
// ! this one above works (shout outs to @karlhorky)

// ? didn't work
// export async function start() {
//   const connection = await createConnection();
//   const schema = await buildSchema();
//   const server = new ApolloServer({ schema });
//   await server.listen(4000);
//   console.log('Server has started!');
// }
