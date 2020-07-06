import { ApolloServer, gql } from 'apollo-server-micro';
import { User } from '../../db/entity/User';

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

export const resolvers = {
  Query: {
    users(parent, args, context) {
      // getUser: async (_: any, args: any) => {
      return [{ name: 'next.js' }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
