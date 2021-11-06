import React from "react";
import PropTypes from "prop-types";

import { StyledPrimary } from "../styles/StyledList";

const NavigationPostDetail = ({ id }) => <StyledPrimary to={`/post/${id}`}>DETAY</StyledPrimary>;

NavigationPostDetail.propTypes = {
  id: PropTypes.number,
};

export default NavigationPostDetail;
