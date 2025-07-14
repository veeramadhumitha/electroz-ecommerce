import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // ✅ import useAuth
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Login.css";
import bgImage from "./images/bg.jpg"; // ✅ background image

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { login } = useAuth();  // ✅ get login from context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        login(data.user || formData);  // ✅ update context user
        navigate("/");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">Electroz</Link>
        </div>
      </nav>

      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div className="login-card bg-light p-4 rounded shadow">
          <h3 className="text-center mb-4">Welcome Back</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex align-items-center">
              <i className="bi bi-envelope form-icon me-2"></i>
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
              <i className="bi bi-lock form-icon me-2"></i>
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
            <button type="submit" className="btn btn-dark w-100">Login</button>
          </form>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
          <p className="mt-2 text-center">
            <Link to="/forgot">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
