import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Placeholder for search functionality
    console.log('Searching for:', query);
  };

  return (
    <div className={styles.searchBar}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;