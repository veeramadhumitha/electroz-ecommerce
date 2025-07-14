import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Forgot.css"; // Use this CSS for styling

function Forgot() {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password reset successful!");
        navigate("/login");
      } else {
        alert(data.message || "Error resetting password");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="forgot-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">Electroz</Link>
        </div>
      </nav>

      <div className="forgot-container">
        <div className="forgot-card">
          <h3 className="text-center mb-4">Reset Password</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
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
            <div className="mb-3">
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="New Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-reset w-100">
              Reset Password
            </button>
          </form>
          <p className="mt-3 text-center">
            <Link to="/login">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
