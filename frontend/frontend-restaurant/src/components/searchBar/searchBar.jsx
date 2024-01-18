import React from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
