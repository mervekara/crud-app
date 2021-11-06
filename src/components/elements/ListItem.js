import React from "react";
import PropTypes from "prop-types";

// Elements

//Style

// Hooks

const List = (props) => {
  const { id, title, body } = props;

  return (
    <div>
      {id} {title} {body}
    </div>
  );
};

List.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

export default List;
