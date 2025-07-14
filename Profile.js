import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";  // Import your CSS with background image

function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile-page">
      <div className="overlay"></div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">Electroz</Link>
          <div className="ms-auto">
            <Link to="/" className="btn btn-outline-light btn-sm">Home</Link>
          </div>
        </div>
      </nav>

      <div className="profile-content">
        <div className="profile-card">
          <h3 className="text-center mb-4">My Profile</h3>

          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <div className="form-control bg-light">{user?.name || "Not provided"}</div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <div className="form-control bg-light">{user?.email || "Not provided"}</div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Phone</label>
            <div className="form-control bg-light">{user?.phone || "Not provided"}</div>
          </div>

          <div className="text-center">
            <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
