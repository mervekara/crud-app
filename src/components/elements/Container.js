import React from "react";
import PropTypes from "prop-types";

// Elements
import List from "./List";
import PostDetail from "./PostDetail";
import ProfileDetail from "./ProfileDetail";

//Style
import { StyledContainer } from "../styles/StyledContainer";

const Container = (props) => {
  const { isDetail, isProfile, posts, post, profile } = props;

  return (
    <StyledContainer>
      {isProfile ? (
        <ProfileDetail profile={profile} />
      ) : isDetail ? (
        <PostDetail post={post} />
      ) : (
        <List posts={posts} />
      )}
    </StyledContainer>
  );
};

Container.propTypes = {
  posts: PropTypes.array,
  isDetail: PropTypes.bool,
  isProfile: PropTypes.bool,
  post: PropTypes.object,
  profile: PropTypes.object,
};

export default Container;
