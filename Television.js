import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Television.css';

import tv1 from './images/tv1.jpg';
import tv2 from './images/tv2.jpg';
import tv3 from './images/tv3.jpg';
import tv4 from './images/tv4.jpg';
import tv5 from './images/tv5.jpg';
import tv6 from './images/tv6.jpg';
import tv7 from './images/tv7.jpg';
import tv8 from './images/tv8.jpg';

const televisions = [
  { id: 91, name: "Samsung Crystal 4K", price: "₹32,999", image: tv1 },
  { id: 29, name: "Sony Bravia 43\" 4K", price: "₹49,999", image: tv2 },
  { id: 93, name: "LG UHD 50\"", price: "₹44,490", image: tv3 },
  { id: 94, name: "TCL 55\" QLED", price: "₹54,990", image: tv4 },
  { id: 95, name: "OnePlus Y Series", price: "₹27,999", image: tv5 },
  { id: 96, name: "Mi 5X 4K 55\"", price: "₹39,999", image: tv6 },
  { id: 97, name: "Vu Premium 65\"", price: "₹58,990", image: tv7 },
  { id: 98, name: "Realme Smart TV 43\"", price: "₹24,999", image: tv8 },
   { id: 99, name: "Samsung Crystal 4K", price: "₹32,999", image: tv1 },
  { id: 82, name: "Sony Bravia 43\" 4K", price: "₹49,999", image: tv2 },
  { id: 83, name: "LG UHD 50\"", price: "₹44,490", image: tv3 },
  { id: 84, name: "TCL 55\" QLED", price: "₹54,990", image: tv4 },
];

function Television() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

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
              <li className="nav-item">
                <Link to="/cart" className="nav-link btn-cart-link">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-5">
        <h2 className="section-title text-center mb-4">Top Televisions</h2>
        <div className="row g-4">
          {televisions.map((tv) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={tv.id}>
              <div className="product-card shadow-sm">
                <img src={tv.image} alt={tv.name} className="product-img" />
                <h6 className="product-name mt-2">{tv.name}</h6>
                <p className="product-price">{tv.price}</p>
                <button className="btn btn-cart w-100" onClick={() => handleAddToCart(tv)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Television;
