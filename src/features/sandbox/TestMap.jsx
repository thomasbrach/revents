import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const TestMap = ({ location }) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCq1RFgj8VEONUFVWNOppPeotJVeZUHn8g" }}
        center={location.center}
        zoom={location.zoom}
      >
        <AnyReactComponent
          lat={location.center.lat}
          lng={location.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default TestMap;
