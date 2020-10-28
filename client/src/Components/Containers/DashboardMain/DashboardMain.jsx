import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/client'

import {dashboardQuery, shapeQuery} from '../../../graphql/queries';
import ControllCard from '../../Components/ControllCard/ControllCard';
import Scene from '../../Components/Scene/Scene';
import DashboardCard from '../../Components/DashboardCards/DashboardCards';
import {DashboardMainDiv, EmptyScene, TopCards} from './DashboardMain.styles';

const DashboardMain = ({id}) => {
  const {loading, data, error} = useQuery(dashboardQuery);
  const [getShape, { loading:queryLoading, data:queryData, error:queryError }] = useLazyQuery(shapeQuery);
  let cards;
 if(!loading && data) {
  cards = (Object.entries(data.dashboard)).map((name, val)  => {
  return name[0]==='__typename' ? null : <DashboardCard name={name} />
} 
)
}
 return (
   <>
   <TopCards>
   {cards}
   </TopCards>
    <DashboardMainDiv>
    { !queryLoading && queryData ? <Scene shape={queryData.shape} /> : <EmptyScene /> }
      <ControllCard getShape={getShape}/>
    </DashboardMainDiv>
    </>
 )
}

export default DashboardMain;
