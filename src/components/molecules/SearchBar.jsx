// src/components/molecules/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="max-w-xl mx-auto mb-10 px-4">
      <div className="relative border-b border-neutral-300 focus-within:border-neutral-800 transition-colors">
        <span className="absolute left-0 top-2 text-neutral-400">🔍</span>
        <input
          type="text"
          placeholder="BUSCAR EN LA COLECCIÓN..."
          /* Quitamos 'uppercase' para que veas lo que escribes tal cual */
          className="w-full pl-8 pr-4 py-2 bg-transparent outline-none text-sm tracking-widest text-neutral-800 placeholder:text-neutral-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
