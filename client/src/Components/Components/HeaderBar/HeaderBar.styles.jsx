import styled from 'styled-components'

const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  background-color: #fbfbfb;
  padding: 7px 7.5%;
  font-size:13px;
  color: #383636;
  p {
    padding: 0 10px;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

export {HeaderDiv}
