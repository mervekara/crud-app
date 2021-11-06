import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDeletePost } from "../hooks/useDeletePost";

// Styles
import {
  StyledModal,
  StyledModalHeader,
  StyledModalClose,
  StyledModalDeleteContent,
  StyledModalText,
  StyledModalFooter,
  StyledModalDelete,
} from "../styles/StyledModal";

import { StyledDelete } from "../styles/StyledList";

const DeleteModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = props;

  const [deleteId, setId] = useState(0);
  const [error] = useDeletePost(deleteId);

  const handleDeletePost = (e) => {
    setId(e);
    setIsOpen(!isOpen);
  };

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <StyledDelete onClick={toggleModal}>SIL</StyledDelete>
      <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <StyledModalHeader>
          <div className="modal-title">Sil</div>
          <div className="modal-close">
            <StyledModalClose onClick={toggleModal}>x</StyledModalClose>
          </div>
        </StyledModalHeader>
        <StyledModalDeleteContent>
          {error ? (
            <StyledModalText>Something went wrong...</StyledModalText>
          ) : (
            <StyledModalText>Silmek istediğinizden emin misiniz?</StyledModalText>
          )}
        </StyledModalDeleteContent>
        <StyledModalFooter>
          <StyledModalDelete onClick={() => handleDeletePost(id)}>SIL</StyledModalDelete>
        </StyledModalFooter>
      </StyledModal>
    </div>
  );
};

DeleteModal.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteModal;
