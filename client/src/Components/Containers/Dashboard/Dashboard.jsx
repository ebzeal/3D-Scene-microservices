import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client'

import { getUserQuery } from '../../../graphql/queries';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import DashboardMain from '../DashboardMain/DashboardMain';
import {DashboardPage} from './Dashboard.styles';

import {getAccesTokenUser} from '../../../services/authentication'

const Dashboard = ({handleLogOut, userToken}) => {
  const userId = getAccesTokenUser(userToken);
  const {id} = userId;
  const {loading, data, error} = useQuery(getUserQuery, {variables: {id}});
  
  return (
  <DashboardPage>
    {loading ? '...' : <HeaderBar handleLogOut={handleLogOut} user={data.showUser} />  }
    <DashboardMain />
  </DashboardPage>
 )
}

export default Dashboard;
