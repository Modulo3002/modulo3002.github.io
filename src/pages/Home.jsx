import SearchBar from "../components/SearchBar";
import tables from "../data/tables.json" ;
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Vind openbare Schaaktafels in Nederland</h1>
              <SearchBar/>

      <ul>
        {tables.map((table) => (
          <li key={table.id}>
            <Link to={`/tafels/${table.id}`}>{table.name}</Link>
          
          </li>
        ))}
          <li>
                            <Link to={`/MapOverzicht`}>Map Overzicht</Link>

            </li>
      </ul>
    </main>
  );
}
