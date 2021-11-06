import React from "react";
import { Link } from "react-router-dom";

import {
  StyledFooter,
  StyledFooterTop,
  StyledThanksText,
  StyledText,
  StyledFooterBottom,
} from "../styles/StyledFooter";

import SocialFollow from "./SocialFollow";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop>
        <div className="footer-text">
          <StyledThanksText>Thank you for supporting us!</StyledThanksText>
          <StyledText>Let's get in touch on any of these platforms.</StyledText>
        </div>
        <div className="footer-social-media">
          <SocialFollow />
        </div>
      </StyledFooterTop>
      <StyledFooterBottom>
        <div className="footer-copy">
          © 2018 <span>Şikayetvar</span>
        </div>
        <div className="footer-link">
          <Link to="/">Post</Link>
        </div>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

export default Footer;
