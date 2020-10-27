import React, {useState} from 'react';

import {ButtonDiv} from './Button.styles';

const Button = ({type, text}) => (<ButtonDiv type={type}>{text}</ButtonDiv>)

export default Button;
