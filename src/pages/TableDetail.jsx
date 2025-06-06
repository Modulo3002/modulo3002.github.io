import { useParams } from "react-router-dom";
import tables from "../data/tables.json";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./TableDetail.css";
import GoogleMapsIcon from '../assets/icons8-google-maps (1).svg'

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function TableDetail() {
  const { id } = useParams();
  const table = tables.find((t) => t.id.toString() === id);

  if (!table) {
    return <p>Table not found</p>;
  }

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${table.lat},${table.lng}`;

  return (
    <div className="table-detail">
      <h1 className="title">{table.name}</h1>

      <MapContainer
        center={[table.lat, table.lng]}
        zoom={16}
        style={{ height: "300px", width: "100%", marginBottom: "1rem" }}
        zoomControl={false}
      >
        <ZoomControl position="bottomleft" />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[table.lat, table.lng]}>
          <Popup>
            <h4><strong>{table.name}</strong></h4>
            <b>Aantal schaaktafels:</b> {table.tables} <br />
            <b>Adres:</b><br />
            {table.address}<br />
            {table.postal_code}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${table.lat},${table.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigeer met Google Maps
            </a>
          </Popup>

        </Marker>
      </MapContainer>

      
        <strong>{table.name}</strong><br />
        <b>Aantal schaaktafels:</b> {table.tables} <br />
        <b>Adres:</b><br />
        {table.address}<br />
        {table.postal_code}
        

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="navigate-button"
      >
        Navigeer met Google Maps <img src={GoogleMapsIcon}/>
      </a>

      {table.image && (
        <img className="table-img"
          src={table.image}
          alt={table.name}
          style={{ width: "100%", marginTop: "1rem", borderRadius: "0.5rem" }}
        />
      )}
    </div>
  );
}
