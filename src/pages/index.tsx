import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageContainer from '@containers/PageContainer';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '@schemas';
import PrivateRoute from '@components/PrivateRoute';
import Login from './login';
import Launches from './launches';
import LaunchItem from './launches/LaunchItem';
import Cart from './cart';
import Profile from './profile';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App() {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <>
      <Helmet title="SpaceXplorer" />
      <BrowserRouter>
        <PageContainer>
          <Switch>
            <PrivateRoute exact path="/" isAuthenticated={data.isLoggedIn} component={Launches} />
            <PrivateRoute
              exact
              path="/launch/:launchId"
              isAuthenticated={data.isLoggedIn}
              component={LaunchItem}
            />
            <PrivateRoute exact path="/cart" isAuthenticated={data.isLoggedIn} component={Cart} />
            <PrivateRoute
              exact
              path="/profile"
              isAuthenticated={data.isLoggedIn}
              component={Profile}
            />
            <Route exact path="/login" component={Login} />
          </Switch>
        </PageContainer>
      </BrowserRouter>
    </>
  );
}
