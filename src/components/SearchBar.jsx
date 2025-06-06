import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBar({ search, setSearch, onSearch, onReset, hasSearched }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(); // activeer zoeken
    }
  };

  return (
    <div className="search-container"
    >
      <input
        type="text"
        placeholder="Zoek op of plaats of postcode"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}

      />
            {/* <button onClick={onSearch}><SearchIcon/></button>
            <button className="btn-reset" onClick={onReset}>X</button> */}
    {!hasSearched ? (
        <button onClick={onSearch}>
          <SearchIcon />
        </button>
      ) : (
        <button className="btn-reset" onClick={onReset}><CloseIcon/></button>
      )}
    </div>
  );
}