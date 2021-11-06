import React from "react";
import PropTypes from "prop-types";

// Elements
import List from "./List";
import PostDetail from "./PostDetail";
import ProfileDetail from "./ProfileDetail";

//Style
import { StyledContainer } from "../styles/StyledContainer";

// Hooks
import { usePostsFetch } from "../hooks/usePostsFetch";

const Container = (props) => {
  const { isDetail, isProfile, post, profile } = props;

  const [
    {
      state: { posts },
      error,
    },
    fetchPosts,
  ] = usePostsFetch();
  console.log(profile);
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
  isDetail: PropTypes.bool,
  isProfile: PropTypes.bool,
  post: PropTypes.object,
  profile: PropTypes.object,
};

export default Container;
