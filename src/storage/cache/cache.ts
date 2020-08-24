/* eslint-disable @typescript-eslint/no-use-before-define */
import { InMemoryCache, Reference } from '@apollo/client';
import { readRecord } from '@localStorage';

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn() {
          return isLoggedInVar();
        },
        cartItems() {
          return cartItemsVar();
        },
        launches: {
          keyArgs: false,
          merge(existing, incoming) {
            let launches: Reference[] = [];
            if (existing && existing.launches) {
              launches = launches.concat(existing.launches);
            }
            if (incoming && incoming.launches) {
              launches = launches.concat(incoming.launches);
            }
            return {
              ...incoming,
              launches,
            };
          },
        },
      },
    },
  },
});

export const isLoggedInVar = cache.makeVar<boolean>(!!readRecord('token'));
export const cartItemsVar = cache.makeVar<string[]>([]);

export default cache;