import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../../hooks/useCart";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem: removeItemFromCart } = useCart();

  const handleUpdateQuantity = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemoveItem = () => {
    removeItemFromCart(item.id);
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img src={item.imageUrl} alt={item.name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.name}>{item.name}</h3>
          <p className={styles.price}>${item.price.toFixed(2)}</p>
        </div>

        <div className={styles.controls}>
          <div className={styles.quantity}>
            <button
              className={styles.quantityButton}
              onClick={() => handleUpdateQuantity(item.quantity - 1)}
              aria-label="Disminuir cantidad"
            >
              <Minus size={16} />
            </button>
            <span className={styles.quantityValue}>{item.quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={() => handleUpdateQuantity(item.quantity + 1)}
              aria-label="Aumentar cantidad"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className={styles.subtotal}>${subtotal.toFixed(2)}</div>

          <button
            className={styles.removeButton}
            onClick={handleRemoveItem}
            aria-label="Eliminar producto"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
