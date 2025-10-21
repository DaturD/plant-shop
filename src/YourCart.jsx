import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext.jsx";

export default function YourCart() {
  const navigate = useNavigate();
  const { cart, increment, decrement, clearCart } = useContext(CartContext);
  const [showThankYou, setShowThankYou] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleBuy = () => {
    clearCart();            
    setShowThankYou(true);  
  };

  return (
    <main className="cart">
      <header className="nav">
        <span className="nav__brand">Plant Shop 🌱</span>
        <nav>
          <button className="link" onClick={() => navigate("/products")}>Shop</button>
          <button className="link" onClick={() => navigate("/cart")}>
            🛒 Cart ({cart.reduce((sum, i) => sum + i.qty, 0)})
          </button>
        </nav>
      </header>

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="muted">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item__info">
                  <strong>{item.name}</strong>
                  <span>${item.price} each</span>
                </div>
                <div className="counter">
                  <button onClick={() => decrement(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increment(item.id)}>+</button>
                </div>
                <div className="cart-item__subtotal">
                  ${item.price * item.qty}
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <div className="cart-line">
              <span><strong>Total:</strong></span>
              <span className="cart-total">${subtotal}</span>
            </div>
            <div className="cart-actions">
              <button className="btn btn-secondary" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-primary" onClick={handleBuy}>
                Buy
              </button>
            </div>
          </div>
        </>
      )}

      {showThankYou && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>🌱 Thank you for buying!</h3>
            <p>Your order has been placed successfully.</p>
            <button className="btn btn-primary" onClick={() => setShowThankYou(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}