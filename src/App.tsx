import React from 'react';
import { useQuery } from '@apollo/client';
import Pages from './pages';
import Login from './pages/login';
import {IS_LOGGED_IN} from "@schemas";

function App() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages /> : <Login />;
}

export default App;
