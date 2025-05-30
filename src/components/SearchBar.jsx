import "./SearchBar.css";

export default function SearchBar({ search, setSearch, onSearch }) {
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
        placeholder="Zoek op postcode of plaatsnaam"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}

      />
      <button onClick={onSearch}>Zoeken</button>
    </div>
  );
}