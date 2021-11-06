import React, { useState } from "react";
import { ellipsis } from "polished";
import styled from "styled-components";

import { StyledReadMoreContainer, StyledShowMoreText } from "../styles/StyledReadMoreContainer";

const StyledDescriptionText = styled.div`
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #525f7f;
  line-height: 22px;
  ${({ showMore }) => showMore && ellipsis(undefined, 3)}
`;

const Description = () => {
  const [isShowMore, setIsShowMore] = useState(true);
  const toggleReadMore = () => setIsShowMore((show) => !show);

  return (
    <StyledReadMoreContainer>
      <StyledDescriptionText showMore={isShowMore}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </StyledDescriptionText>
      <StyledShowMoreText onClick={toggleReadMore}>
        {isShowMore ? "Show more" : "Show less"}
      </StyledShowMoreText>
    </StyledReadMoreContainer>
  );
};

export default Description;
