import "./SearchBar.css";

export default function SearchBar({ search, setSearch, onSearch, onReset }) {
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
            <button onClick={onSearch}>Zoeken</button>
            <button className="btn-reset" onClick={onReset}>Reset</button>


    </div>
  );
}