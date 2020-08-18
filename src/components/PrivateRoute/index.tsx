import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  isAuthenticated: boolean;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function PrivateRoute({ children, isAuthenticated, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
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
