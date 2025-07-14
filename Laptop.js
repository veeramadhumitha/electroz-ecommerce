import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Laptop.css';

import lap1 from './images/la1.jpg';
import lap2 from './images/la2.jpg';
import lap3 from './images/la3.jpg';
import lap4 from './images/la4.jpg';
import lap5 from './images/la5.jpg';
import lap6 from './images/la6.jpg';
import lap7 from './images/la7.jpg';
import lap8 from './images/la8.jpg';
import lap9 from './images/la9.jpg';

const laptops = [
  { id: 1, name: "HP Pavilion 15", price: "₹62,999", image: lap1 },
  { id: 2, name: "Dell Inspiron 14", price: "₹54,490", image: lap2 },
  { id: 3, name: "Lenovo IdeaPad Slim 3", price: "₹48,999", image: lap3 },
  { id: 4, name: "Apple MacBook Air M1", price: "₹89,900", image: lap4 },
  { id: 5, name: "ASUS VivoBook 15", price: "₹45,990", image: lap5 },
  { id: 6, name: "MSI Modern 14", price: "₹57,499", image: lap6 },
  { id: 7, name: "Acer Aspire 7", price: "₹53,990", image: lap7 },
  { id: 8, name: "HP Victus Gaming", price: "₹72,990", image: lap8 },
  { id: 9, name: "Lenovo Legion 5", price: "₹84,999", image: lap9 },
  { id: 10, name: "MSI Modern 14", price: "₹57,499", image: lap6 },
  { id: 11, name: "Acer Aspire 7", price: "₹53,990", image: lap7 },
  { id: 12, name: "HP Victus Gaming", price: "₹72,990", image: lap8 },

];

function Laptop() {
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
        <h2 className="section-title text-center mb-4">Top Laptops</h2>
        <div className="row g-4">
          {laptops.map((lap) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={lap.id}>
              <div className="product-card shadow-sm">
                <img src={lap.image} alt={lap.name} className="product-img" />
                <h6 className="product-name mt-2">{lap.name}</h6>
                <p className="product-price">{lap.price}</p>
                <button className="btn btn-cart w-100" onClick={() => handleAddToCart(lap)}>
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

export default Laptop;
