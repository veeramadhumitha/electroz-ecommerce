import React from 'react';
import './Contact.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bgImage from './images/bg.jpg'; // adjust the path if needed

function Contact() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">⚡ Electroz</Navbar.Brand>
          <Navbar.Toggle aria-controls="navMenu" />
          <Navbar.Collapse id="navMenu">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/contact" active="true">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Section with Background Image */}
      <section
        className="contact-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '80px 0',
          color: 'white'
        }}
      >
        <Container>
          <div className="contact-header text-center mb-5">
            <h2 className="fw-bold">Get in Touch</h2>
            <p className="text-light">We’d love to hear from you! Please fill out the form below.</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="contact-card">
                <form>
                  <div className="mb-3">
                    <label className="form-label text-white">Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white">Message</label>
                    <textarea className="form-control" rows="5" placeholder="Type your message here..." required />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-send">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
