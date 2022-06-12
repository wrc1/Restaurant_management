import styled from 'styled-components/macro';


const Tab = styled.div`

  width: 110px;
  height: fit-content;
  padding: 2px 2px;
  color: white;
  text-align: center;
  cursor: pointer;
  background-color: ${props => (props.active ? '#0d6efd' : '')};

`;

export default {
  Tab,
}