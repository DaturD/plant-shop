import React from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <main className="landing">
      <h1>🌱 Welcome to Plant Shop</h1>
      <p>Find the perfect houseplant for your home.</p>
      <button className="btn btn-primary" onClick={() => navigate("/products")}>
        Browse Plants
      </button>
    </main>
  );
}