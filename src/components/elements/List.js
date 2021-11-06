import React from "react";
import PropTypes from "prop-types";
import { ModalProvider } from "styled-react-modal";

// Elements
import NavigationPostDetail from "./NavigationPostDetail";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

// Hooks

//Style
import { StyledList, StyledListItem, StyledTitle, StyledId } from "../styles/StyledList";

// Hooks

const List = (props) => {
  const { posts } = props;

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
            <ModalProvider>
              <DeleteModal id={id} />
            </ModalProvider>
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
