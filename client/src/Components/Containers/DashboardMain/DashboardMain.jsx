import React from 'react';

import ControllCard from '../../Components/ControllCard/ControllCard';
import Scene from '../../Components/Scene/Scene';
import {DashboardMainDiv} from './DashboardMain.styles';

const DashboardMain = () => {
 return (
    <DashboardMainDiv>
      <Scene />
      <ControllCard />
    </DashboardMainDiv>
 )
}

export default DashboardMain;
