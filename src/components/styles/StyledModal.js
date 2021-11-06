import Modal from "styled-react-modal";
import styled from "styled-components";

export const StyledModal = Modal.styled`
  width: 32rem;
  height: 27rem;
  display: flex;
  background-color: #fff;
  box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9ecef;
  height: 50px;
  width: 100%;

  .modal-title {
    font-size: 16px;
    color: #32325d;
    padding: 17px 20px;
    width: 90%;
  }

  .modal-close {
    font-size: 16px;
    color: #525f7f;
    width: 10%;
  }
`;
