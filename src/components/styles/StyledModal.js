import Modal from "styled-react-modal";
import styled from "styled-components";

export const StyledModal = Modal.styled`
  width: 32rem;
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
  font-weight: 400;

  .modal-title {
    font-size: 16px;
    color: #32325d;
    padding: 17px 20px;
    width: 90%;
  }

  .modal-close {
    font-size: 16px;
    color: #525f7f;
    padding: 17px 20px;
    width: 10%;
  }
`;

export const StyledModalClose = styled.a`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

export const StyledModalContent = styled.div`
  border-bottom: 1px solid #e9ecef;
  height: 240px;
  font-weight: 400;
  padding: 26px 36px 26px 24px;
`;

export const StyledModalDeleteContent = styled.div`
  border-bottom: 1px solid #e9ecef;
  font-weight: 400;
  padding: 26px 36px 26px 24px;
`;

export const StyledModalTitle = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #525f7f;
`;

export const StyledModalInput = styled.input`
  font-size: 14px;
  color: #8898aa;
  border: 1px solid #cad1d7;
  border-radius: 4px;
  width: 94%;
  margin: 10px 0 15px 0;
  padding: 13px 12px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #cad1d7;
  }
`;

export const StyledModalTextArea = styled.textarea`
  font-size: 14px;
  color: #8898aa;
  border: 1px solid #cad1d7;
  border-radius: 4px;
  width: 94%;
  margin: 10px 0 15px 0;
  padding: 13px 12px;
  height: 100px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #cad1d7;
  }
`;

export const StyledModalFooter = styled.div`
  padding: 26px 36px 26px 24px;
`;

export const StyledModalUpdate = styled.button`
  background: #11cdef;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(50, 50, 93, 0.11);
  border-radius: 4px;
  color: #ffffff;
  padding: 12px 21px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledModalText = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #525f7f;
`;

export const StyledModalDelete = styled.button`
  background: #fb6340;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(50, 50, 93, 0.11);
  border-radius: 4px;
  color: #ffffff;
  padding: 12px 21px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
`;
