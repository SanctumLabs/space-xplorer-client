/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  isAuthenticated: boolean;
}

export default function PrivateRoute({ component: Component, isAuthenticated, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          // @ts-ignore
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
