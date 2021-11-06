import React, { useState } from "react";
import PropTypes from "prop-types";
import { ModalProvider } from "styled-react-modal";

// Elements
import NavigationPostDetail from "./NavigationPostDetail";
import EditModal from "./EditModal";

// Hooks
import { useDeletePost } from "../hooks/useDeletePost";

//Style
import {
  StyledList,
  StyledListItem,
  StyledTitle,
  StyledId,
  StyledDelete,
} from "../styles/StyledList";

// Hooks

const List = (props) => {
  const { posts } = props;
  console.log(posts);

  const [id, setId] = useState(0);
  const [result] = useDeletePost(id);

  const handleDeletePost = (id) => {
    setId(id);
    console.log(result);
  };

  return (
    <StyledList>
      {posts.map(({ id, title, body }) => (
        <StyledListItem key={id}>
          <div className="list-content">
            <StyledId>{id}</StyledId>
            <StyledTitle>{title}</StyledTitle>
          </div>
          <div className="list-buttons">
            <NavigationPostDetail id={id} />
            <ModalProvider>
              <EditModal editTitle={title} editBody={body} id={id} />
            </ModalProvider>
            <StyledDelete onClick={() => handleDeletePost(id)}>SİL</StyledDelete>
          </div>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

List.propTypes = {
  posts: PropTypes.array,
};

export default List;
