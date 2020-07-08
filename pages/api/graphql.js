// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import 'reflect-metadata';
import { ApolloServer, gql } from 'apollo-server-micro';
import * as TypeORM from 'typeorm';
import { User } from '../../db/entity/User.ts';
import connect from '../../typeorm';

export const config = {
  api: {
    bodyParser: false,
  },
};

// ! this code below works
export default async function graphqlAPI(req, res) {
  try {
    const connection = await connect();

    const userRepository = TypeORM.getRepository(User);
    const defaultUser = userRepository.create({
      email: 'krozzlerino@zle.io',
      firstName: 'kroz',
      lastName: 'zaw',
      password: '12345',
      handle: 'krozzle',
      role: 'ADMIN',
      confirmed: true,
      mainGame: 'sfv',
      sideGame: 'mhw',
      isActive: true,
    });
    // res.statusCode = 200;
    // res.json(await userRepository.save(defaultUser));
    const schema = await TypeGraphQL.buildSchema({
      resolvers: [RecipeResolver, RateResolver],
      container: Container,
    });
    const context = { user: defaultUser };

    const apolloServer = new ApolloServer({ schema, context });
    const handler = apolloServer.createHandler({ path: '/api/graphql' });
    await handler(...arguments);
  } catch (error) {
    res.statusCode = 500;
    res.json(error);

    console.log(error);
  }
}
// ! this code above works

// console.log('Inserting a new user into the database...');
// const user = new User();`
// user.firstName = 'Timber';
// user.lastName = 'Saw';
// user.email = 'kroz@zle.io';
// user.confirmed = true;
// user.role = 'admin';

// await connection.manager.save(user);
// console.log('Saved a new user with id: ' + user.id);

// console.log('Loading users from the database...');
// const users = await connection.manager.find(User);
// console.log('Loaded users: ', users);

// console.log('Here you can setup and run express/koa/any other framework.');

// const connectionOptions = {
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: 5432,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   name: 'graphql',
//   synchronize: true,
//   entities: ['./entity/*.ts'],
//   migrations: ['./migration/*.ts'],
//   subscribers: ['./subscriber/*.ts'],
// };

// const typeDefs = gql`
//   type Query {
//     users: [User!]!
//   }
//   type User {
//     id: Number
//     firstName: String!
//     lastName: String!
//     email: String!
//     confirmed: Boolean
//     role: String!
//   }
// `;

// createConnection()
//   .then(connection => {
//     // here you can start to work with your entities
//   })
//   .catch(error => console.log(error));
