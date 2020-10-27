import React, {useState} from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { logInQuery, signUpMutation } from '../../../graphql/queries';

import { FormDiv } from './LoginForm.styles';

import LoginCard from './LoginCard';
import SignupCard from './SignupCard';

const LoginForm = ({handleGetUser}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [getUser, { loading:queryLoading, data:queryData, error:queryError }] = useLazyQuery(logInQuery);
  const [registerUser, {loading:mutationLoading, data:mutationData, error:mutationError}] = useMutation(signUpMutation);

  let loading, data, error
  isLogin ? 
  (loading = queryLoading, data=queryData, error=queryError) 
  : 
  (loading = mutationLoading, data=mutationData, error=mutationError)
  

  if(data?.access_token) {
    const token = data.access_token;
    localStorage.setItem('access_token', token);
    handleGetUser(token);
  }

  const { reset } = useForm();

  const onLogin = async details => {    
    await getUser({ variables: { details } })
    reset()
  };
  const onSignup = async data => {
    const {email, password, userName, fullName} = data;
    await registerUser({ variables: {input:{email, password, userName, fullName}} });
    reset()
  };

  return (
    <>
    <FormDiv>
  {error ? <span>{error.message}</span> : null }
  {loading ? <p>Loading ...</p> : null}
      {isLogin ? 
      <LoginCard isLogin={isLogin} onLogin={onLogin} loading={loading} />
   :
   <SignupCard isLogin={isLogin} onSignup={onSignup} loading={loading} />
}
    </FormDiv>
    <p style={{ cursor:'pointer', fontSize:'13px', marginTop:"25px" }} onClick={()=>{setIsLogin(!isLogin)}}> {isLogin ? "Sign Up here" : "Login here"}  --{">"}</p>
    </>
  );
};

export default LoginForm;
