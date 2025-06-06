import { Link } from 'react-router-dom';
import tables from '../data/tables.json';

export default function ListOverview() {
  return (
    <ul className="table-list">
      {tables.map((table) => (
        <li key={table.id}>
          <div className="table-card">
            <h3>{table.name}</h3>
            <p>{table.location}</p>
            <p>{table.address}</p>
            <Link to={`/tafel/${table.id}`} className="btn-more-info">
              Meer info
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
