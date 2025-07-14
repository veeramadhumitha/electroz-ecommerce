import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from './images/bg.jpg';
import tvImage from './images/tv.jpg';
import lapImage from './images/lap.jpg';
import moImage from './images/mo4.jpg';

function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar expand="lg" className="electroz-navbar" sticky="top">
        <Container>
          <Navbar.Brand className="fw-bold">Electroz</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="btn-cart-link">Cart</Nav.Link>
              <NavDropdown title="madhu" id="profile-dropdown" align="end">
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        className="hero"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '85vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div className="container text-center text-white">
          <h1>Welcome to Electroz</h1>
          <p className="mb-4">Your trusted store for all electronic gadgets and devices</p>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center section-title">Shop by Category</h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-3">
            <div className="category-card">
              <img src={tvImage} alt="TVs" className="category-img" />
              <h5>Televisions</h5>
              <Link to="/television" className="btn browse-btn mt-2">Browse</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <img src={lapImage} alt="Laptops" className="category-img" />
              <h5>Laptops</h5>
              <Link to="/laptop" className="btn browse-btn mt-2">Browse</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">
              <img src={moImage} alt="Mobiles" className="category-img" />
              <h5>Mobiles</h5>
              <Link to="/mobile" className="btn browse-btn mt-2">Browse</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-center">
        <div className="container">
          <p className="mb-1">&copy; 2025 Electroz. All rights reserved.</p>
          <p><Link to="/about">About Us</Link></p>
          <p className="mt-3" style={{ maxWidth: '600px', margin: 'auto' }}>
            <strong>Electroz</strong> is your trusted destination for the latest and most reliable electronic gadgets.
            For any queries or assistance, reach out to us at <a href="mailto:support@electroz.com">support@electroz.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
