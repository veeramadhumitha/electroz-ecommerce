import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mobile.css';

import mo1 from './images/mo1.jpg';
import mo2 from './images/mo2.jpg';
import mo3 from './images/mo3.jpg';
import mo4 from './images/mo4.jpg';
import mo5 from './images/mo5.jpg';
import mo6 from './images/mo6.jpg';
import mo7 from './images/mo7.jpg';
import mo8 from './images/mo8.jpg';

const mobiles = [
  { id: 21, name: "Samsung Galaxy A54", price: "₹35,999", image: mo1 },
  { id: 22, name: "OnePlus Nord CE 3", price: "₹27,999", image: mo2 },
  { id: 23, name: "iPhone 13", price: "₹59,900", image: mo3 },
  { id: 24, name: "Realme 11 Pro+", price: "₹25,999", image: mo4 },
  { id: 25, name: "Xiaomi Redmi Note 12", price: "₹18,499", image: mo5 },
  { id: 26, name: "Vivo V27", price: "₹32,990", image: mo6 },
  { id: 27, name: "Motorola Edge 40", price: "₹29,999", image: mo7 },
  { id: 28, name: "OPPO Reno8 5G", price: "₹34,999", image: mo8 },
   { id: 29, name: "OnePlus Nord CE 3", price: "₹27,999", image: mo2 },
  { id: 30, name: "iPhone 13", price: "₹59,900", image: mo3 },
  { id: 31, name: "Realme 11 Pro+", price: "₹25,999", image: mo4 },
  { id: 32, name: "Xiaomi Redmi Note 12", price: "₹18,499", image: mo5 },
];

function Mobile() {
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
        <h2 className="section-title text-center mb-4">Top Mobiles</h2>
        <div className="row g-4">
          {mobiles.map((mobile) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={mobile.id}>
              <div className="product-card shadow-sm">
                <img src={mobile.image} alt={mobile.name} className="product-img" />
                <h6 className="product-name mt-2">{mobile.name}</h6>
                <p className="product-price">{mobile.price}</p>
                <button className="btn btn-cart w-100" onClick={() => handleAddToCart(mobile)}>
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

export default Mobile;
