import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Contact from "./Contact";
import Television from "./Television";
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import Forgot from "./Forgot";
import Profile from './Profile';
import Checkout from './Checkout';
import CartPage from './CartPage';
import { useAuth } from "./AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/television" element={<Television />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
