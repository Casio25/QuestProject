import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./ContactMap.css";

class MapComponent extends React.Component {
    state = {
        lat: 50.447702,
        lng: 30.457642,
        zoom: 13
    };

    render() {
        var center = [this.state.lat, this.state.lng];

        return (
            <div className="map-container">
                <MapContainer zoom={this.state.zoom} center={center}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        );
    }
}

export default MapComponent;
