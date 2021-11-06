import React from "react";
import { Link } from "react-router-dom";

import { StyledHeader, StyledLogo, LoginButton, StyledPostButton } from "../styles/StyledHeader";

import RMDBLogo from "../images/logo.png";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <div>
        <StyledLogo src={RMDBLogo} alt="rmdb-logo" />
        <StyledPostButton>
          <Link to="/">Post</Link>
        </StyledPostButton>
      </div>
      <LoginButton> Login </LoginButton>
    </div>
  </StyledHeader>
);

export default Header;
