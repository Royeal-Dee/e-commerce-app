import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart((c) => [...c, product]);
  }
  function clearCart() {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setCart((c) => []);
    }
  }

  const cartState = {
    cart,
    addProduct,
    clearCart,
  };

  console.log(cartState);

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
