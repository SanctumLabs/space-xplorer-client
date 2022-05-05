import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from '@gqlClient';
import { initializeLogger } from '@logger';
import App from './pages';
import * as serviceWorker from './serviceWorker';
import injectStyles from './styles';

injectStyles();
initializeLogger();
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
