import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartPage.css";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">Electroz</Link>
          <div className="ms-auto">
            <Link to="/" className="btn btn-outline-light btn-sm me-2">Home</Link>
            <Link to="/profile" className="btn btn-outline-light btn-sm">Profile</Link>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <h2 className="mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="alert alert-info">
            Your cart is empty. <Link to="/">Start shopping!</Link>
          </div>
        ) : (
          <div className="row g-4">
            {cart.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm cart-item-card">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text mb-2">Price: ₹{item.price}</p>
                    {item.quantity && (
                      <p className="card-text">Quantity: {item.quantity}</p>
                    )}
                    <button
                      onClick={() => removeFromCart(index)}
                      className="btn btn-danger mt-auto"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="mt-4 text-end">
            <h4>Total: ₹{total}</h4>
            <button className="btn btn-success mt-2">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
