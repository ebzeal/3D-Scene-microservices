import React, {useState} from 'react';
import { ApolloProvider } from '@apollo/client';

import Login from './Components/Containers/Login/Login';
import Dashboard from './Components/Containers/Dashboard/Dashboard';

import './App.scss';
import client from './graphql/client';
import { getAccessToken, logOut } from './services/authentication';

const App = () => {
  const [user, setUser] = useState(getAccessToken);

  const getUser =  (user) => {
      setUser(user)
  }
  const handleLogOut = () => {
    logOut();
    setUser(null);
  }

 return (
    <ApolloProvider client={client}>
     { user ? <Dashboard handleLogOut={handleLogOut} userToken={user}/> : <Login handleGetUser={getUser} />}
    </ApolloProvider>
  ) 

};

export default App;
