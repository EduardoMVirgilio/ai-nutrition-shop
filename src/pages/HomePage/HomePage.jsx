import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Shield, Truck } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../../components/ui/ProductCard/ProductCard';
import Button from '../../components/common/Button/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Tu bienestar es nuestra
                <span className={styles.heroAccent}> prioridad</span>
              </h1>
              <p className={styles.heroDescription}>
                Descubre nuestra selección premium de suplementos nutritivos, 
                vitaminas y proteínas de la más alta calidad. Respaldados por 
                la ciencia, diseñados para tu bienestar integral.
              </p>
              <div className={styles.heroActions}>
                <Link to="/productos">
                  <Button variant="primary" className={styles.heroCta}>
                    Ver Productos
                    <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/sobre-nosotros">
                  <Button variant="secondary">
                    Conocer más
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img 
                src="https://images.pexels.com/photos/6001320/pexels-photo-6001320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Suplementos nutritivos de alta calidad"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Shield size={32} />
              </div>
              <h3>Calidad Garantizada</h3>
              <p>Productos certificados y probados en laboratorios independientes</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Heart size={32} />
              </div>
              <h3>Bienestar Integral</h3>
              <p>Suplementos diseñados para tu salud física y mental</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Truck size={32} />
              </div>
              <h3>Envío Rápido</h3>
              <p>Entrega gratuita en pedidos superiores a $50</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Productos Destacados</h2>
            <p className={styles.sectionDescription}>
              Los favoritos de nuestros clientes, seleccionados por su calidad excepcional
            </p>
          </div>
          
          <div className={styles.productsGrid}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className={styles.sectionFooter}>
            <Link to="/productos">
              <Button variant="secondary">
                Ver todos los productos
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;