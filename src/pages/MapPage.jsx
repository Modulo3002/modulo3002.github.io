// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import tables from '../data/tables.json';
// import L from 'leaflet';
// import './MapPage.css';
// import SearchBar from "../components/SearchBar";
// import { useState } from "react";
// import { Link } from 'react-router-dom';

// // Fix marker icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// export default function MapPage() {
//   const defaultPosition = [52.37, 4.89]; // Amsterdam

//   const [search, setSearch] = useState("");
//   const [filteredTables, setFilteredTables] = useState(tables);

//   const handleSearch = () => {
//     const filtered = tables.filter((table) => {
//       const location = table.location.toLowerCase();
//       const address = table.address.toLowerCase();
//       const searchTerm = search.toLowerCase();
//       return location.includes(searchTerm) || address.includes(searchTerm);
//     });

//     setFilteredTables(filtered);
//   };

//   return (
//     <>
//       <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />

//       {/* For example, a list of results */}
//       <ul>
//         {filteredTables.map((table) => (
//           <li key={table.id}>
//             <strong>{table.name}</strong> – {table.location} – {table.address}
//           </li>
//         ))}
//       </ul>

//       <div className='map-wrapper'>
//         <MapContainer center={defaultPosition} zoom={11} style={{ height: '100%', width: '100%' }}>
//           <TileLayer
//             attribution='&copy; OpenStreetMap contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {tables.map((table) => (
//             <Marker key={table.id} position={[table.lat, table.lng]}>
//               <Popup>
//                 <h4><strong>{table.name}</strong></h4>
//                 <b>Aantal schaaktafels:</b> {table.tables} <br />
//                 <b>Adres:</b><br />
//                 {table.address}<br />
//                 {table.postal_code}
//                 <Link to={`/tafel/${table.id}`}>{table.name}</Link>

//                 <button>Navigeer met Google Maps</button>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//         {/* If the map is not full width, check your CSS for .map-wrapper */}
//       </div>
//     </>
//   );
// }


// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import tables from '../data/tables.json';
// import L from 'leaflet';
// import './MapPage.css';
// import SearchBar from '../components/SearchBar';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// // Fix marker icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// // Component to automatically fit the map bounds to markers
// function FitBounds({ locations }) {
//   const map = useMap();

//   useEffect(() => {
//     if (locations.length === 0) return;
//     const bounds = L.latLngBounds(locations);
//     map.fitBounds(bounds, { padding: [50, 50] });
//   }, [locations, map]);

//   return null;
// }

// export default function MapPage() {
//   const [search, setSearch] = useState('');
//   const [filteredTables, setFilteredTables] = useState(tables);

//   const handleSearch = () => {
//     const filtered = tables.filter((table) => {
//       const location = table.location.toLowerCase();
//       const address = table.address.toLowerCase();
//       const name = table.name.toLowerCase();
//       const searchTerm = search.toLowerCase();
//       return (
//         location.includes(searchTerm) ||
//         address.includes(searchTerm) ||
//         name.includes(searchTerm)
//       );
//     });
//     setFilteredTables(filtered);
//   };

//   return (
//     <>
//       <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />

//       <ul>
//         {filteredTables.map((table) => (
//           <li key={table.id}>
//             <strong>{table.name}</strong> – {table.location} – {table.address}
//           </li>
//         ))}
//       </ul>

//       <div className="map-wrapper">
//         <MapContainer style={{ height: '100%', width: '100%' }} center={[52.1, 5.3]} zoom={7}>
//           <TileLayer
//             attribution="&copy; OpenStreetMap contributors"
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           <FitBounds locations={filteredTables.map((t) => [t.lat, t.lng])} />

//           {filteredTables.map((table) => (
//             <Marker key={table.id} position={[table.lat, table.lng]}>
//               <Popup>
//                 <h4><strong>{table.name}</strong></h4>
//                 <b>Aantal schaaktafels:</b> {table.tables} <br />
//                 <b>Adres:</b><br />
//                 {table.address}<br />
//                 {table.postal_code}
//                 <br />
//                 <Link to={`/tafel/${table.id}`}>Meer info</Link>
//                 <br />
//                 <a
//                   href={`https://www.google.com/maps/dir/?api=1&destination=${table.lat},${table.lng}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Navigeer met Google Maps
//                 </a>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>
//     </>
//   );
// }


import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import tables from '../data/tables.json';
import L from 'leaflet';
import './MapPage.css';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const handleSearch = () => {
    const filtered = tables.filter((table) => {
      const location = table.location.toLowerCase();
      const address = table.address.toLowerCase();
      const name = table.name.toLowerCase();
      const searchTerm = search.toLowerCase();
      return (
        location.includes(searchTerm) ||
        address.includes(searchTerm) ||
        name.includes(searchTerm)
      );
    });
    setFilteredTables(filtered);
  };

  const handleReset = () => {
    setSearch('');
    setFilteredTables(tables);
  };

  return (
    <>
      <h1>Schaaktafels in Nederland</h1>
      <p>Vind openbare schaaktafels in heel het land.</p>
      <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />
      <button className="btn-reset" onClick={handleReset}>Reset</button>


      <div className="map-wrapper">
        <MapContainer style={{ height: '100%', width: '100%' }} center={[52.1, 5.3]} zoom={7}>
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
        <ul>
          {filteredTables.map((table) => (
            <li key={table.id}>
              <strong>{table.name}</strong> – {table.location} – {table.address}
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}
