import styled from 'styled-components/macro';

const Dialog = styled.div`
  .modal {
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.modal-main {
  position:fixed;
  width: 60%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}

.display-block {
  display: block;
}

.display-none {
  display: none;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  color: white;

}

`;


export default {
  Dialog
}
