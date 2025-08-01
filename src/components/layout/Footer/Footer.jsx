import React from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <Heart className={styles.logoIcon} />
              <span className={styles.logoText}>
                Nutriti<span className={styles.logoTextSecondary}>ON</span>
              </span>
            </div>
            <p className={styles.description}>
              Tu destino confiable para suplementos nutritivos de alta calidad.
              Comprometidos con tu bienestar y salud integral.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Navegación</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/" className={styles.link}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="/productos" className={styles.link}>
                  Productos
                </a>
              </li>
              <li>
                <a href="/sobre-nosotros" className={styles.link}>
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className={styles.link}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Categorías</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="/productos?categoria=proteinas"
                  className={styles.link}
                >
                  Proteínas
                </a>
              </li>
              <li>
                <a
                  href="/productos?categoria=vitaminas"
                  className={styles.link}
                >
                  Vitaminas
                </a>
              </li>
              <li>
                <a
                  href="/productos?categoria=suplementos"
                  className={styles.link}
                >
                  Suplementos
                </a>
              </li>
              <li>
                <a
                  href="/productos?categoria=deportivos"
                  className={styles.link}
                >
                  Deportivos
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contacto</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Mail size={16} />
                <span>info@nutrition.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>123 Health St, Wellness City</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 NutritiON. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
