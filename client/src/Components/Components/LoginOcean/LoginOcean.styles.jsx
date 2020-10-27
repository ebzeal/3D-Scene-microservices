import styled from 'styled-components';

const OceanDiv = styled.div`
  position: inherit;
  width: 55%;
  @media (max-width: 800px){  
  width: 100%;
}

  img {
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    object-position: 20% 10%;

    @media (max-width: 800px){  
      min-height: 0;
      width:cover;
    object-fit: cover;
    overflow:hidden;
  }
  }
`;

export { OceanDiv };
