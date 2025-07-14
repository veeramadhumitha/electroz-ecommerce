import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: ""
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (res.ok) {
      login(data.user || formData);
      navigate("/");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <div className="register-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Electroz</Link>
        </div>
      </nav>

      <div className="register-container">
        <div className="register-card">
          <h3 className="text-center mb-4">Create Your Electroz Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex align-items-center">
              <i className="bi bi-person form-icon"></i>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <i className="bi bi-envelope form-icon"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <i className="bi bi-telephone form-icon"></i>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Phone"
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <i className="bi bi-lock form-icon"></i>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <i className="bi bi-lock-fill form-icon"></i>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-register w-100">Register</button>
          </form>
          <p className="mt-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
