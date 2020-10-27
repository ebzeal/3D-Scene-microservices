import React from 'react';

import ControllCard from '../../Components/ControllCard/ControllCard'
import {DashboardMainDiv} from './DashboardMain.styles';

const DashboardMain = () => {
 return (
    <DashboardMainDiv>
      <p>3D Scene</p>
      <ControllCard />
    </DashboardMainDiv>
 )
}

export default DashboardMain;
