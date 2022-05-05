import React from 'react';
import { useMutation, ApolloError } from '@apollo/client';
import Loading from '@components/loading';
import { createRecord } from '@localStorage';
import { isLoggedInVar } from '@cache';
import { LOGIN_USER } from '@schemas';
import * as LoginTypes from '@gqlOps/Login';
import { captureException } from '@logger';
import LoginForm from './LoginForm';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Login() {
  const [login, { loading, error }] = useMutation<LoginTypes.Login, LoginTypes.LoginVariables>(
    LOGIN_USER,
    {
      onCompleted({ login: loginResponse }) {
        createRecord('token', loginResponse.token as string);
        createRecord('userId', loginResponse.id as string);
        isLoggedInVar(true);
        // eslint-disable-next-line no-restricted-globals
        location.replace('/');
      },
      onError(apolloError: ApolloError) {
        captureException(apolloError);
      },
    },
  );

  if (loading) return <Loading />;
  if (error) return <p>An error occurred</p>;

  return <LoginForm handleLogin={login} />;
}
