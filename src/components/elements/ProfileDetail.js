import React from "react";
import PropTypes from "prop-types";
import UserInformation from "./UserInformation";
import ReadMoreContainer from "./ReadMoreContainer";
import Maps from "./Maps";

//Style
import { StyledProfileDetail, StyledFulllName, StyledLine } from "../styles/StyledProfileDetail";

// Hooks

const ProfileDetail = (props) => {
  const { profile } = props;
  const { email, name, username, address, phone, website, company } = profile;
  const addressCity = address?.city;
  const geo = address?.geo;
  const lat = geo?.lat;
  const lng = geo?.lng;
  const companyName = company?.name;

  return (
    <>
      <StyledProfileDetail>
        <div className="profile-details">
          <StyledFulllName>
            <h2>{name}</h2>
            <h4>{addressCity}</h4>
          </StyledFulllName>
          <UserInformation
            username={username}
            email={email}
            phone={phone}
            website={website}
            company={companyName}
          />
        </div>
        <div className="profile-map">
          <Maps lat={lat} lng={lng} />
        </div>
      </StyledProfileDetail>
      <StyledLine />
      <ReadMoreContainer />
    </>
  );
};

ProfileDetail.propTypes = {
  profile: PropTypes.object,
};

export default ProfileDetail;
