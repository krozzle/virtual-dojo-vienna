// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import 'reflect-metadata';
import gql from 'graphql';
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    id: Number
    firstName: String!
    lastName: String!
    email: String!
    confirmed: Boolean
    role: String!
  }
`;

createConnection()
  .then(async connection => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.email = 'kroz@zle.io';
    user.confirmed = true;
    user.role = admin;

    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch(error => console.log(error));

// createConnection({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'kbrownie',
//   password: 'postgres',
//   database: 'vdv',
//   entities: [__dirname + './entity/*.ts'],
//   synchronize: true,
//   logging: false,
// })
//   .then(connection => {
//     // here you can start to work with your entities
//   })
//   .catch(error => console.log(error));

// export default (req, res) => {
//   res.statusCode = 200;
//   res.json({ name: 'John Doe' });
// };
