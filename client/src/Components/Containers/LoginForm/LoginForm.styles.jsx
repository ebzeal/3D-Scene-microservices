import styled from 'styled-components';

const FormDiv = styled.div`
  background-color: #fbfbfb;
  padding: 20px;
  box-shadow: -1px 1px #ccc, -1px 1px #ccc, -1px 1px #ccc, -1px 1px #ccc, -1px 1px #ccc;
  min-width: 100%;

  @media (max-width: 800px){  
    margin-top: 40px
  }
 
  label {
    font-size:13px;
    color: #383636;
    margin-bottom: 8px;
    display:block;
  }

  input {
    font-size:13px;
    color: #fbfbfb;
    margin-bottom: 15px;
    display:block;
    width:300px;
    height:20px;
    border: none;
    border-radius:5px;
    background: #636363;
    padding: 5px;
  }

  span {
    font-size:13px;
    color: #e03838;
    margin-bottom: 15px;
    display:block;
  }
`;

export { FormDiv };
