import styled from 'styled-components/macro';

const Tabs = styled.div`
display: flex;
  /* display: flex;
  background: #2d2d36;
  width: fit-content;
  padding: 2px 2px; */
  > div:not(:last-child) {
    border-right: 1px solid #2d2d36; 
  }
`;

export default {
  Tabs,
}