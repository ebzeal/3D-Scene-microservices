import React from 'react';

import { HeaderDiv } from './HeaderBar.styles'

const HeaderBar = ({handleLogOut, user}) => {
  
  console.log("user", user)
  return(
  <HeaderDiv>
    <p onClick={handleLogOut}> Sign out </p>
<p style={{ textTransform:'capitalize' }}>Hello {user.userName || user.fullName}</p>
    <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
  </HeaderDiv>
)}
export default HeaderBar;
