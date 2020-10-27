import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';

const LoginCard = ({isLogin, onSignup, loading}) =>{ 
  const { register, handleSubmit, watch, errors, reset } = useForm();

 return (
  <form onSubmit={!isLogin ? handleSubmit(onSignup) : null}>
  <label htmlFor="fullName">Full Name</label>
  
  <input disabled={ loading } type="text" name="fullName" id="fullName" ref={register({ required: true })} />
  
  {errors.fullName && <span>Full Name is required</span>}
  
  
  <label htmlFor="userName">Username</label>
  
  <input disabled={ loading } type="text" name="userName" id="userName" ref={register()} />
  
  
  <label htmlFor="email">Email</label>
  
  <input disabled={ loading } type="text" name="email" id="email" ref={register({
    required: "Required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "invalid email address"
    }
  })} />
  
  {errors.email && <span>Email is not correct</span>}
  
  
  <label htmlFor="password">Password</label>
  
  <input disabled={ loading } type="password" name="password" id="password" ref={register({ required: true })} />
  
  {errors.password && <span>Password is required</span>}
  
  
  <label htmlFor="confirmpassword">Confirm Password</label>
  
  <input disabled={ loading } type="password" name="confirmpassword" id="confirmpassword" ref={register({
    required:true,
validate: (value) => value === watch('password') || "Passwords don't match."
})} />
  
  {errors.confirmpassword && <span>Does not match password</span>}
  
  
  <Button type="submit" text="Sign Up" />
</form>

 
)
}
export default LoginCard;
