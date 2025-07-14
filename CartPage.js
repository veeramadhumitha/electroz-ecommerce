import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Handlers
  const updateQuantity = (id, delta) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, delta } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Total sum
  const total = cart.reduce((sum, item) => {
    const priceNum = parseInt(item.price?.replace(/\D/g, '') || '0', 10);
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg electroz-navbar sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">Electroz</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-5">
        <h2 className="text-center mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty!</p>
            <Link to="/" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    const priceNum = parseInt(item.price?.replace(/\D/g, '') || '0', 10);
                    return (
                      <tr key={item.id}>
                        <td>
                          <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                          {item.name}
                        </td>
                        <td className="text-center">{item.price}</td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="text-center">
                          ₹{(priceNum * item.quantity).toLocaleString()}
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="text-end mt-4">
              <h4>Total: ₹{total.toLocaleString()}</h4>
             <Link to="/checkout" className="btn btn-success mt-2">Proceed to Checkout</Link>

            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;
