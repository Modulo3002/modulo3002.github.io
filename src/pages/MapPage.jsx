import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import tables from '../data/tables.json';
import L from 'leaflet';
import './MapPage.css';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TableListDropdown from '../components/TableListDropdown';
import UnderConstrutction from '../components/UnderConstruction';

// Fix marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Component to automatically fit the map bounds to markers
function FitBounds({ locations }) {
  const map = useMap();

  useEffect(() => {
    if (locations.length === 0) return;
    const bounds = L.latLngBounds(locations);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [locations, map]);

  return null;
}

export default function MapPage() {
  const [search, setSearch] = useState('');
  const [filteredTables, setFilteredTables] = useState(tables);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    //const die ook filtert op spatie etc a
    const searchTerm = search.trim().toLowerCase().replace(/\s+/g, '');

    //ifstatement zorgt voor niet kunnen zoeken bij geen zoekterm
    if (searchTerm.trim() === '' ) return;
    const filtered = tables.filter((table) => {
      const location = table.location.toLowerCase().replace(/\s+/g, '');
      const address = table.address.toLowerCase().replace(/\s+/g, '');
      const name = table.name.toLowerCase().replace(/\s+/g, '');
      const searchTerm = search.toLowerCase().replace(/\s+/g, '');
      return (
        location.includes(searchTerm) ||
        address.includes(searchTerm) ||
        name.includes(searchTerm)
      );
    });
    setFilteredTables(filtered);
    setHasSearched(true);
  };

  const handleReset = () => {
    setSearch('');
    setFilteredTables(tables);
    setHasSearched(false); 

  };

  return (
    <>
      <UnderConstrutction/>
      <div className="map-wrapper">
        <div className="map-search-overlay">
        <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} onReset={handleReset} hasSearched={hasSearched}/>
        </div>
        <MapContainer style={{ height: '100%', width: '100%' }} center={[52.1, 5.3]} zoom={7} zoomControl={false}>
          <ZoomControl position="bottomleft" />

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBounds locations={filteredTables.map((t) => [t.lat, t.lng])} />

          {filteredTables.map((table) => (
            <Marker key={table.id} position={[table.lat, table.lng]}>
              <Popup>
                <h4><strong>{table.name}</strong></h4>
                <b>Aantal schaaktafels:</b> {table.tables} <br />
                <b>Adres:</b><br />
                {table.address}<br />
                {table.postal_code}
                <br />
                <Link to={`/tafel/${table.id}`}>Meer info</Link>
                <br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${table.lat},${table.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Navigeer met Google Maps
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>


{hasSearched && filteredTables.length > 0 && (
  <TableListDropdown tables={filteredTables} total={tables.length} />
)}      </div>
    </>
  );
}
