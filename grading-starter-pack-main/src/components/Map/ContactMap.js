import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./ContactMap.css";

class MapComponent extends React.Component {
    state = {
        lat: 50.447702,
        lng: 30.457642,
        zoom: 13
    };

    render() {
        const center = [this.state.lat, this.state.lng];
        const position = { lat: this.state.lat, lng: this.state.lng };

        const redMarker = new L.Icon({
            iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            shadowSize: [41, 41],
            shadowAnchor: [12, 41]
        });

        return (
            <div className="map-container">
                <MapContainer className="custom-map-container" zoom={this.state.zoom} center={center}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={redMarker}>
                        <Popup>
                            Наше місцерозташування.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        );
    }
}

export default MapComponent;

