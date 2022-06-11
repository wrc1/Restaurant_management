import styled from 'styled-components/macro';


const StatusType = styled.div`
  width: 265px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .status-type-section {
    width: 80px;
    height: 80px;
    margin-top: 5px;
    height: 70px;
    padding: 9px 8px 4px 7px;
    /* margin: 10px 5px 0 0; */
    padding: 9px 8px 4px 7px;
    object-fit: contain;
    border-radius: 8px;
    border: solid 0.5px rgba(255, 255, 255, 0.05);
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }



`;


export default {
  StatusType
}
