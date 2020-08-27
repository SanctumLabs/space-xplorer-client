import { ApolloClient, gql } from '@apollo/client';
import cache from '@cache';
import { readRecord } from '@localStorage';

// eslint-disable-next-line no-underscore-dangle
const apiUrl = process.env.API_URL || window._env_.API_URL;

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
