import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import PropTypes from "prop-types";

function Maps(props) {
  const { lat, lng } = props;

  const containerStyle = {
    width: "400px",
    height: "250px",
    float: "right",
  };

  const center = {
    lat: lat ? Number(lat) : -3.745,
    lng: lng ? Number(lng) : -38.523,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCHs2p1-IkTWseWL6hwbG7opXU5jb2wIWM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

Maps.propTypes = {
  lat: PropTypes.string,
  lng: PropTypes.string,
};

export default React.memo(Maps);
