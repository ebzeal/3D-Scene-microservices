import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';

const LoginCard = ({isLogin, onLogin, loading}) =>{ 
  const { register, handleSubmit, watch, errors, reset } = useForm();

 return (
  <form onSubmit={isLogin ? handleSubmit(onLogin) : null}>
  <label htmlFor="details">Username or Email Address</label>
  
  <input disabled={ loading } type="text" name="details" id="details" ref={register({ required: true })} />
  
  {errors.details && <span>This field is required</span>}
  
  
  <label htmlFor="password">Password</label>
  
  <input disabled={ loading } type="password" name="password" id="password" ref={register({ required: true })} />
  
  {errors.password && <span>This field is required</span>}
  
  <Button type="submit" text="Login" />
  
</form> 
 
)
}
export default LoginCard;
