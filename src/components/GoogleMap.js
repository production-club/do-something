import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function GMap() {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 34.05847, lng: -118.2384 }}
    >
      <Marker position={{ lat: 34.05847, lng: -118.2384 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(GMap));

export default function GoogMap() {
  return (
    <div className="MapWrapper">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD5vmebJ4QdocMqm89nAAeUR-dDg5mUboE`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
