import React from 'react';
import { categories } from '../../../data/products';
import styles from './FilterPanel.module.css';

const FilterPanel = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className={styles.filterPanel}>
      <h3 className={styles.title}>Categorías</h3>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${
              activeCategory === category.id ? styles.active : ''
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;