// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { GoogleMap, Marker } from "react-google-maps"
// import ReactDOM from "react-dom";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
//   DirectionsRenderer
// } from "react-google-maps";

// const mapStateToProps = state => ({
//     state
//   });

// // map without directions render
// // const MyMapComponent = compose(
// //   withProps({
// //     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwieOkb8LmGzX2CEeClbaQHr_PAAHbDw0&v=3.exp&libraries=geometry,drawing,places",
// //     loadingElement: <div style={{ height: `100%` }} />,
// //     containerElement: <div style={{ height: `400px` }} />,
// //     mapElement: <div style={{ height: `100%` }} />
// //   }),
// //   withScriptjs,
// //   withGoogleMap
// // )(props => (
// //   <GoogleMap defaultZoom={18} defaultCenter={{ lat: 44.9780926, lng: -93.263273 }}>
// //     {props.isMarkerShown && (
// //       <Marker position={{ lat: 44.9780926, lng: -93.2632734 }} />
// //     )}
// //   </GoogleMap>
// // ));
// // const google =
// map = new google.maps.Map(document.getElementById("map"), {...});


// const { compose, withProps, lifecycle } = require("recompose");
// const {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer,
// } = require("react-google-maps");

// const MapWithADirectionsRenderer = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwieOkb8LmGzX2CEeClbaQHr_PAAHbDw0&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionsService = new google.maps.DirectionsService();

//       DirectionsService.route({
//         origin: new google.maps.LatLng(44.9780926,  -93.2632734),
//         destination: new google.maps.LatLng(location.latitude, location.longitude),
//         travelMode: google.maps.TravelMode.WALKING,
//       }, (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             directions: result,
//           });
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       });
//     }
//   })
// )(props =>
//   <GoogleMap
//     defaultZoom={18}
//     defaultCenter={new google.maps.LatLng(44.9780926, -93.2632734)}
//   >
//     {props.directions && <DirectionsRenderer directions={props.directions} />}
//   </GoogleMap>
// );
// // render() {
// //     return 
// // }


// {/* ReactDOM.render(, document.getElementById("root")); */}
// <MapWithADirectionsRenderer isMarkerShown />
// export default connect(mapStateToProps)(Map);
