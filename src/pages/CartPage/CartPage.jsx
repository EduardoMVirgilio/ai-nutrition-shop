import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import CartItem from "../../components/ui/CartItem/CartItem";
import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import { toast } from "react-hot-toast";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { items, totalAmount, clearCart } = useCart();
  const [showClearModal, setShowClearModal] = useState(false);

  const handleClearCart = () => {
    clearCart();
    setShowClearModal(false);
    toast.success("Carrito vaciado");
  };

  const handleCheckout = () => {
    toast.success("¡Pedido procesado! Gracias por tu compra.");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className={styles.cartPage}>
        <div className="container">
          <div className={styles.emptyCart}>
            <ShoppingBag size={64} className={styles.emptyIcon} />
            <h2 className={styles.emptyTitle}>Tu carrito está vacío</h2>
            <p className={styles.emptyDescription}>
              Agrega algunos productos para comenzar tu compra
            </p>
            <Link to="/productos">
              <Button variant="primary">
                <ArrowLeft size={18} />
                Explorar Productos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Mi Carrito</h1>
          <Button
            variant="secondary"
            onClick={() => setShowClearModal(true)}
            className={styles.clearButton}
          >
            Vaciar Carrito
          </Button>
        </div>

        <div className={styles.content}>
          <div className={styles.items}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryContent}>
              <h3 className={styles.summaryTitle}>Resumen del Pedido</h3>

              <div className={styles.summaryRow}>
                <span>Subtotal:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Envío:</span>
                <span>{totalAmount >= 50 ? "Gratis" : "$5.99"}</span>
              </div>

              <hr className={styles.summaryDivider} />

              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Total:</span>
                <span>
                  $
                  {(totalAmount >= 50
                    ? totalAmount
                    : totalAmount + 5.99
                  ).toFixed(2)}
                </span>
              </div>

              {totalAmount < 50 && (
                <p className={styles.freeShipping}>
                  Agrega ${(50 - totalAmount).toFixed(2)} más para envío gratis
                </p>
              )}

              <Button
                variant="primary"
                fullWidth
                onClick={handleCheckout}
                className={styles.checkoutButton}
              >
                Proceder al Pago
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showClearModal}
        onClose={() => setShowClearModal(false)}
        title="¿Vaciar carrito?"
        actions={{
          confirm: {
            label: "Sí, vaciar",
            onClick: handleClearCart,
            variant: "danger",
          },
          cancel: {
            label: "Cancelar",
            onClick: () => setShowClearModal(false),
          },
        }}
      >
        <p>¿Estás seguro de que quieres vaciar tu carrito de compras?</p>
      </Modal>
    </div>
  );
};

export default CartPage;
