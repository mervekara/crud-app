import React from "react";
import PropTypes from "prop-types";

//Style
import { StyledInformation, StyledSWebSite } from "../styles/StyledProfileDetail";

// Hooks

const UserInformation = (props) => {
  const { email, username, phone, website, company } = props;

  return (
    <>
      <StyledInformation>
        <span className="information-key">Username</span>
        <span className="information-value">{username}</span>
      </StyledInformation>
      <StyledInformation>
        <span className="information-key">Email</span>il
        <span className="information-value">{email}</span>
      </StyledInformation>
      <StyledInformation>
        <span className="information-key">Phone</span>
        <span className="information-value">{phone}</span>
      </StyledInformation>
      <StyledInformation>
        <span className="information-key">Website</span>
        <span className="information-value">
          <StyledSWebSite>{website}</StyledSWebSite>
        </span>
      </StyledInformation>
      <StyledInformation>
        <span className="information-key">Company</span>
        <span className="information-value">{company}</span>
      </StyledInformation>
    </>
  );
};

UserInformation.propTypes = {
  profile: PropTypes.object,
  username: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.string,
};

export default UserInformation;
