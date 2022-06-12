import styled from 'styled-components/macro';


const Tab = styled.div`

  width: 110px;
  height: fit-content;
  padding: 2px 2px;
  color: white;
  text-align: center;
  cursor: pointer;
  position: relative;
`;

const TabIndector = styled.div`
  height: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${props => (props.active ? '#0d6efd' : '')};
  width: 100%;
  position: absolute;
  bottom: -10px;
  left: 0px;
`

export default {
  Tab,
  TabIndector,
}