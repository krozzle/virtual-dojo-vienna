import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    id: Int
    confirmed: Boolean
    email: String
    firstName: String
    lastName: String
    handle: String
    isActive: Boolean
    role: String
    mainGame: String
    sideGames: String
  }
`;

export const resolvers = {
  Query: {
    users(User) {
      // getUser: async (_: any, args: any) => {
      return [{ firstName: 'next.js' }];
    },
  },
};

// todo make seperate server file
// ! https://github.com/prisma/prisma-examples/tree/master/typescript/graphql-apollo-server
const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
