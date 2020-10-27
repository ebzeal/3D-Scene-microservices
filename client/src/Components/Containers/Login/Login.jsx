import React from 'react';

import { LoginPage, LogingPageRight } from './Login.styles';
import LoginOcean from '../../Components/LoginOcean/LoginOcean';
import LoginForm from '../LoginForm/LoginForm';

const Login = ({handleGetUser}) => {
  return (
    <LoginPage>
      <LoginOcean />
      <LogingPageRight>
        <LoginForm  handleGetUser={handleGetUser}/>
      </LogingPageRight>
    </LoginPage>
  );
};

export default Login;
