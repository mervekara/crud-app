import React, { useState } from "react";
import PropTypes from "prop-types";
import { useUpdatePost } from "../hooks/useUpdatePost";

import { StyledModal, StyledModalHeader } from "../styles/StyledModal";

const EditModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { editTitle, editBody, id } = props;

  // const [open, setOpen] = React.useState(false);
  // const [title, setTitle] = React.useState(editTitle);
  // const [body, setBody] = React.useState(editBody);
  const [editId, setEditId] = useState(0);
  const [updateResult] = useUpdatePost(editId);

  function toggleModal(e) {
    console.log(e);
    setIsOpen(!isOpen);
    setEditId(id);
    console.log(updateResult);
  }

  return (
    <div>
      <button onClick={toggleModal}>Click me</button>
      <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <StyledModalHeader>
          <div className="modal-title">Düzenle</div>
          <div className="modal-close">x</div>
        </StyledModalHeader>
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
