import React from 'react';

import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import DashboardMain from '../DashboardMain/DashboardMain';
import {DashboardPage} from './Dashboard.styles';

import {getAccesTokenUser} from '../../../services/authentication'

const Dashboard = ({handleLogOut, userToken}) => {
  const user = getAccesTokenUser(userToken);
  console.log("Dashboard -> user", user)
 return (
  <DashboardPage>
    <HeaderBar handleLogOut={handleLogOut} user={user} />
    <DashboardMain />
  </DashboardPage>
 )
}

export default Dashboard;
