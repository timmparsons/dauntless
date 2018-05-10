import React from "react";
import GoogleMapReact from "google-map-react";

export default class GoogleMap extends React.Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 11
  };
  render() {
    return (
      <div style={{ height: "100vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCBmnSJKfjQL3VX4WM8fSwwr2bw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}
