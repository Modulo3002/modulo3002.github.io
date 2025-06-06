import { useState } from 'react';
import './TableListDropdown.css';
import { Link } from 'react-router-dom';

export default function TableListDropdown({ tables, total }) {
  const [showList, setShowList] = useState(false);

  const toggleList = () => setShowList((prev) => !prev);

  return (
    <div className="table-list-dropdown">
      <button className="btn-toggle-list" onClick={toggleList}>
        {tables.length === total
          ? 'Toon lijst met alle tafels in Nederland'
          : `Toon lijst met gevonden tafels (${tables.length})`}
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
