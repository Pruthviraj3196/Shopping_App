import React, { useState } from 'react';
import './style/Cart.css';

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity, isOpen, closeCart, onCheckout }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
    onCheckout(); // this clears the cart
    setTimeout(() => {
      setOrderPlaced(false);
      closeCart();
    }, 2000); // auto-close after 2 seconds
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeCart}>✖</button>
      <h2>Your Cart</h2>

      {orderPlaced ? (
        <div className="order-msg">🎉 Order Placed Successfully!</div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.images[0]} alt={item.title} />
                  <div className="cart-details">
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <div className="qty-control">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
