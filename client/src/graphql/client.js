import {
  ApolloClient, ApolloLink, HttpLink, InMemoryCache
} from '@apollo/client/core';

import { getAccessToken } from '../services/authentication';

const urlLink = 'http://localhost:5000/graphql';


const httpLink = ApolloLink.from([
  new ApolloLink((operation, forward) => {
    const token = getAccessToken();
    if (token) {
      operation.setContext({headers: {'authorization': `Bearer ${token}`}});
    }
    return forward(operation);
  }),
  new HttpLink({uri: urlLink})
]);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
