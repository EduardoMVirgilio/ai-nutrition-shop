import React, { createContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("nutrition-cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Sync with localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("nutrition-cart", JSON.stringify(cart));
  }, [cart]);

  // Handler functions
  const addItem = useCallback((item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((i) => i.id === item.id);

      if (existingItem) {
        return {
          ...prevCart,
          items: prevCart.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }

      return {
        ...prevCart,
        items: [...prevCart.items, { ...item, quantity: 1 }],
      };
    });
  }, []);

  const removeItem = useCallback((itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter((item) => item.id !== itemId),
    }));
  }, []);

  const updateQuantity = useCallback((itemId, quantity) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return {
          ...prevCart,
          items: prevCart.items.filter((item) => item.id !== itemId),
        };
      }

      return {
        ...prevCart,
        items: prevCart.items.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        ),
      };
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart({ items: [] });
  }, []);

  // Calculate totals
  const totalItems = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    items: cart.items,
    totalItems,
    totalAmount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
