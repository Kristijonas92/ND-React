import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './SearchCategory.module.scss';

const SearchCategory = () => {
  const { category } = useParams();

  return (
    <div className={styles.searchCategoryPage}>
      <h1>Search Results for {category}</h1>
      <p>Display search results for the selected category...</p>
    </div>
  );
};

export default SearchCategory;
