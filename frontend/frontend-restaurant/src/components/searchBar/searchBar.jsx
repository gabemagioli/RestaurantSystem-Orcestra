import React from 'react';
import "./searchBar.css";

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <input
          type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          className="searchBar"
        />
        <button className="pesquisar">PESQUISAR</button>
    </>

  );
};

export default SearchBar;
