import React, { useState, useMemo } from 'react';
import { products } from '../../data/products';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import FilterPanel from '../../components/ui/FilterPanel/FilterPanel';
import styles from './ProductsPage.module.css';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className={styles.productsPage}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Nuestros Productos</h1>
          <p className={styles.description}>
            Descubre nuestra amplia selección de suplementos nutritivos de alta calidad
          </p>
        </div>

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <FilterPanel 
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </aside>

          <main className={styles.main}>
            <div className={styles.resultsHeader}>
              <p className={styles.resultsCount}>
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={styles.productsGrid}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No se encontraron productos en esta categoría.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;