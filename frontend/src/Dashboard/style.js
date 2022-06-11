import styled from 'styled-components/macro'

const Dashboard = styled.div`
  width: 100%;
  height: 100%;

  .PieFrame {
    height: 9rem;
    width: 9rem;
  }
`
const Container = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 100%;
`
const Header = styled.div`
  height: 205px;
  object-fit: contain;
  background-color: #2d2d36;
  padding: 5px 0 0 87px;

  .title-section {
    height: 30%;
    width: auto;
    color: white;
    font-size: 25px;
    font-weight: 500;
  }

  .inforamtion-section {
    > div:not(:first-child) {
      margin-left: 50px;
    }
    display: flex;
    height: 70%;
    width: 100%;

  .workers-info {
    color: #9fa3ad;
    width: fit-content;
    display: flex;
    display: flex;
    flex-direction: column;
  }

   .total-title {
      font-size: 20px;
      color: #9fa3ad;
   }

  .numbers-section {
    font-size: 46px;
    font-weight: 300;
    color: white;
   }

  .offline-workers {
     color: white;
  }

  .status-section {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }
  .status-info {
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: space-around;
    height: 100px;
  }
  .health-section {
      height: 90%;
      color: white;
      font-size: 20px;
      color: #9fa3ad;
      width: 300px;
      display: flex;
      justify-content: space-around;
  }
   
  }

 

`
const TableToolbar = styled.div`
  height: 48px;
  padding: 8px 12px 8px 15px;
  border-radius:5px 5px 0px 0px;
  background-color: black;
  display: flex;
  align-items: center;
  
  .section {
    display: flex;
    padding: 5px;
    flex: auto;
    align-items: center;
  }

  .left-section {
    
  }

  .right-section {
   justify-content: flex-end;
  }

  .icon-b {
    color: white;  
  }

  .create-user {
    /* color: #fff;
    background-color: #007bff;
    border-color: #007bff; */
    height: fit-content;
  }

  .bi-person-plus-fill {
    margin: 5px;
    color: white;
    font-size: 1rem;
  }
`;


export default {
  Dashboard,
  Header,
  TableToolbar,
  Container
}

