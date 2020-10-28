import styled from 'styled-components'

const DashboardMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  height: 40px;
  padding: 7px 7.5%;
  font-size:13px;
  color: #383636;
  p {
    padding: 0 10px;
    cursor: pointer;
  }
`;

const EmptyScene = styled.div`
  background-color: #FBFBFB;
  min-width:50%;
`;

const TopCards = styled.div`
  background-color: rgba(224, 224, 224, 0.8);
  padding:15px 5px 15px 85px;
  margin: 0px auto;
`;


export {DashboardMainDiv, EmptyScene, TopCards}
