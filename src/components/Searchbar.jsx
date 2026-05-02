import { useApp } from "../context/AppContext";

export default function SearchBar() {
  const { search, setSearch, filter, setFilter, categories } = useApp();

  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search tips..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}