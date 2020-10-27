import React from 'react';

import Button from '../Button/Button';
import {ControllCardDiv} from './ControllCard.styles';

const ControllCard = () => {

  return (
    <ControllCardDiv>
      <Button type="submit" text="Square" />
      <Button type="submit" text="Circle" />
      <Button type="submit" text="Triangle" />
      <Button type="submit" text="Clear Scene" />
      
    </ControllCardDiv>
  )
}

export default ControllCard;
