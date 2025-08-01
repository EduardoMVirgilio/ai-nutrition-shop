import React from "react";
import { useCart } from "../../../hooks/useCart";
import { toast } from "react-hot-toast";
import Button from "../../common/Button/Button";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} agregado al carrito`, {
      duration: 2000,
      position: "bottom-right",
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <Button
            variant="primary"
            onClick={handleAddToCart}
            className={styles.addButton}
          >
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
