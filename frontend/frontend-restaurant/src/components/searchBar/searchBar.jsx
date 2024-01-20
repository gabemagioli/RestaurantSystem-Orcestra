import React from 'react';
import "./searchBar.css";

const SearchBar = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="searchBar"
        />
        <button className="pesquisar">PESQUISAR</button>
    </>

  );
};

export default SearchBar;
