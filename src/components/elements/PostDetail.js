import React from "react";
import PropTypes from "prop-types";

import NavigationProfileDetail from "./NavigationProfileDetail";

//Style
import { StyledPost, StyledPostTitle, StyledPostBody } from "../styles/StyledPost";

// Hooks

const PostDetail = (props) => {
  const { post } = props;

  return (
    <StyledPost>
      <NavigationProfileDetail id={post.userId} name={post.name} />
      <StyledPostTitle>
        <span>Title : </span> {post.title}
      </StyledPostTitle>
      <StyledPostBody>
        <span>Content : </span>
        {post.body}
      </StyledPostBody>
    </StyledPost>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object,
};

export default PostDetail;
