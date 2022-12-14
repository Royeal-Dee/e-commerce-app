import React, { Component, useEffect } from "react";
import { CartContext, useCart } from "../../context/CartProvider";

function ProductPage(props) {
  const { cart } = useContext(CartContext);
  const { clearCart } = useCart(CartContext);
  const { removeFromCart } = useCart(CartContext);
  const { updateCart } = useCart(CartContext);
  const { cartTotal } = useCart(CartContext);
  const { cartCount } = useCart(CartContext);
  const { cartItems } = useCart(CartContext);

  function renderCart() {
    return cart.map((item) => {
      return (
        <div
          className="cart-item"
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          description={item.description}
          category={item.category}
        />
      );
    });
  }

  return (
    <div className="cart-content">
      {renderCart()}
      <div className="cart-total">
        <h3>Cart Total</h3>
        <h3>Cart Count</h3>
        <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
    </div>
  );
}
