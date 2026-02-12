
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <MapContainer center={[28.1248, -15.4300]} zoom={14} className="map">
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.1248, -15.4300]}>
        <Popup>UrbanKicks · Gran Canaria Concept Store</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
