import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from "@apollo/client";
import client from '@gqlClient';
import App from './App';
import * as serviceWorker from './serviceWorker';
import injectStyles from './styles';

injectStyles();
ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
