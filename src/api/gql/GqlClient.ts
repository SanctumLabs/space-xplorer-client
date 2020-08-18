import { ApolloClient, gql } from '@apollo/client';
import cache from '@cache';
import { readRecord } from '@localStorage';

const apiUrl = process.env.API_URL;

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;

export default new ApolloClient({
  uri: apiUrl,
  cache,
  headers: {
    authorization: readRecord('token') || '',
    'client-name': 'Space Xplorer [web]',
    // dynamically change this version
    'client-version': '1.0.0',
  },
  typeDefs,
  resolvers: {},
});
