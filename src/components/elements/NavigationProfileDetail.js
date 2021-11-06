import React from "react";
import PropTypes from "prop-types";

import { StyledPostName } from "../styles/StyledPost";

const NavigationProfileDetail = ({ id, name }) => (
  <StyledPostName to={`/profile/${id}`}>{name}</StyledPostName>
);

NavigationProfileDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

export default NavigationProfileDetail;
