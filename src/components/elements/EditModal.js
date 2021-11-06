import React, { useState } from "react";
import PropTypes from "prop-types";
import { useUpdatePost } from "../hooks/useUpdatePost";

// Styles
import {
  StyledModal,
  StyledModalHeader,
  StyledModalClose,
  StyledModalContent,
  StyledModalTitle,
  StyledModalInput,
  StyledModalTextArea,
  StyledModalFooter,
  StyledModalUpdate,
  StyledModalText,
} from "../styles/StyledModal";

import { StyledSecondary } from "../styles/StyledList";

const EditModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { editTitle, editBody, id } = props;

  // const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState(editTitle);
  const [body, setBody] = React.useState(editBody);
  const [editId, setEditId] = useState(0);
  const [error] = useUpdatePost(editId);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };

  const handleUpdatePost = (id) => {
    setEditId(id);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <StyledSecondary onClick={toggleModal}>DUZENLE</StyledSecondary>
      <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <StyledModalHeader>
          <div className="modal-title">Düzenle</div>
          <div className="modal-close">
            <StyledModalClose onClick={toggleModal}>x</StyledModalClose>
          </div>
        </StyledModalHeader>
        {error ? (
          <StyledModalText>Something went wrong...</StyledModalText>
        ) : (
          <StyledModalContent>
            <StyledModalTitle>Title</StyledModalTitle>
            <StyledModalInput
              type="text"
              value={title}
              onChange={handleChangeTitle}></StyledModalInput>
            <StyledModalTitle>Body</StyledModalTitle>
            <StyledModalTextArea value={body} onChange={handleChangeBody}></StyledModalTextArea>
          </StyledModalContent>
        )}

        <StyledModalFooter>
          <StyledModalUpdate onClick={() => handleUpdatePost(id)}>GUNCELLE</StyledModalUpdate>
        </StyledModalFooter>
      </StyledModal>
    </div>
  );
};

EditModal.propTypes = {
  editTitle: PropTypes.string.isRequired,
  editBody: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default EditModal;
