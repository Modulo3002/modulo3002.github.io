import { useState } from 'react';
import './TableListDropdown.css';
import { Link } from 'react-router-dom';

export default function TableListDropdown({ tables, total }) {
  const [showList, setShowList] = useState(false);

  const toggleList = () => setShowList((prev) => !prev);

  return (
    <div className="table-list-dropdown">
      {/* tables.length is +1 because current JSON starts with id1 */}
      <button className="btn-toggle-list" onClick={toggleList}>
        {tables.length === total
          ? 'Toon lijst met alle tafels in Nederland'
          : `Toon gevonden tafels (${tables.length + 1})`}
      </button>

      {showList && (
        <ul className="table-list">
          {tables.map((table) => (
            <li key={table.id}>

              <div className="table-card">
                <h3>{table.name}</h3>
                <p>{table.location}</p>
                <p>{table.address}</p>
                <Link to={`/tafel/${table.id}`} className="btn-more-info">Meer info</Link>
            </div>
            </li>
          ))}
        </ul>
        
      )}
      
    </div>
  );
}
