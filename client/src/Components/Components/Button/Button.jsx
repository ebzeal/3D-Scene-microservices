import React, {useState} from 'react';

import {ButtonDiv} from './Button.styles';

const Button = ({type, text, onClick}) => (<ButtonDiv type={type} onClick={onClick}>{text}</ButtonDiv>)

export default Button;
