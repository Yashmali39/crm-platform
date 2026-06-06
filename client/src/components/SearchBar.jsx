import { FiSearch } from "react-icons/fi";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative">
      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search by name, email or company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default SearchBar;