import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import {
  StyledSocialMedia,
  StyledSocialTwitter,
  StyledSocialFacebook,
  StyledSocialDribble,
  StyledSocialGithub,
} from "../styles/StyledSocialMedia";

// Tooltip
const TooltipText = styled.div`
  width: 100%;
  cursor: pointer;
`;
const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 65px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    top: -10px;
    left: 33px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 65px;
    left: -25px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
    }
  }
`;

const SocialFollow = () => {
  return (
    <StyledSocialMedia>
      <StyledSocialTwitter href="https://www.twitter.com/jamesqquick">
        <TooltipCard>
          <TooltipText>
            <FontAwesomeIcon icon={faTwitter} />
          </TooltipText>
          <TooltipBox>
            <p>Follow us</p>
          </TooltipBox>
        </TooltipCard>
      </StyledSocialTwitter>
      <StyledSocialFacebook>
        <TooltipCard>
          <TooltipText>
            <FontAwesomeIcon icon={faFacebook} />
          </TooltipText>
          <TooltipBox>
            <p>Follow us</p>
          </TooltipBox>
        </TooltipCard>
      </StyledSocialFacebook>
      <StyledSocialDribble>
        <TooltipCard>
          <TooltipText>
            <FontAwesomeIcon icon={faDribbble} />
          </TooltipText>
          <TooltipBox>
            <p>Follow us</p>
          </TooltipBox>
        </TooltipCard>
      </StyledSocialDribble>
      <StyledSocialGithub>
        <TooltipCard>
          <TooltipText>
            <FontAwesomeIcon icon={faGithub} />
          </TooltipText>
          <TooltipBox>
            <p>Follow us</p>
          </TooltipBox>
        </TooltipCard>
      </StyledSocialGithub>
    </StyledSocialMedia>
  );
};

export default SocialFollow;
