import React from 'react';

import Button from '../Button/Button';
import {ControllCardDiv} from './ControllCard.styles';

const ControllCard = ({getShape}) => {
  const handleClick =(val) => {
    getShape({ variables: { shapeName:val } })
  }
  return (
    <ControllCardDiv>
      <Button type="submit" text="Square" onClick={()=>{handleClick('square')}}/>
      <Button type="submit" text="Circle" onClick={()=>{handleClick('circle')}}/>
      <Button type="submit" text="Triangle" onClick={()=>{handleClick('triangle')}}/>
      <Button type="submit" text="Clear Scene" onClick={()=>{handleClick('clear')}}/>
      
    </ControllCardDiv>
  )
}

export default ControllCard;
