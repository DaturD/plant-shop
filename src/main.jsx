import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Products from "./Products.jsx";
import YourCart from "./YourCart.jsx";
import { CartProvider } from "./CartContext.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<YourCart />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);