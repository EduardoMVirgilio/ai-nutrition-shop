import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button/Button';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>Página no encontrada</h1>
          <p className={styles.description}>
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          
          <div className={styles.actions}>
            <Link to="/">
              <Button variant="primary">
                <Home size={18} />
                Ir al Inicio
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} />
              Volver Atrás
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;