import React from 'react';
import { useMutation } from '@apollo/client';
import Loading from '@components/loading';
import { createRecord } from '@localStorage';
import { isLoggedInVar } from '@cache';
import { LOGIN_USER } from '@schemas';
import * as LoginTypes from '@gqlOps/Login';
import LoginForm from './LoginForm';

export default function Login() {
  const [login, { loading, error }] = useMutation<LoginTypes.Login, LoginTypes.LoginVariables>(
    LOGIN_USER,
    {
      onCompleted({ login: loginResponse }) {
        createRecord('token', loginResponse.token as string);
        createRecord('userId', loginResponse.id as string);
        isLoggedInVar(true);
      },
    },
  );

  if (loading) return <Loading />;
  if (error) return <p>An error occurred</p>;

  return <LoginForm handleLogin={login} />;
}
