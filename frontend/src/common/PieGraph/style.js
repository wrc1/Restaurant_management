import styled from 'styled-components/macro';


const PieGraph = styled.div``

const PieOuterCircle = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  position: relative;
  object-fit: contain;
  box-shadow: 0 0 1.7rem 0 rgba(0, 0, 0, 0.4);
  border: solid 0.2rem #464752;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2d2d36
`;

const PieInnerCircle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  object-fit: contain;
  opacity: 0.4;
  border: 0.1rem solid;
  ${props => {
    if (props.type === 'anomaly2') {
      return {
        borderColor: '#017aff',
        boxShadow: `0 0 1rem #017aff`,
      };
    }
    return {
      backgroundColor: '#25252d',
      borderColor: 'transparent',
      boxShadow: 'inset 0 0 0.9rem 0.2rem rgba(12, 12, 40, 0.13)',
    };
  }}
`;

export default {
  PieGraph,
  PieOuterCircle,
  PieInnerCircle,
}