import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext.jsx";

export default function Products() {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");

  const products = [
  { id: 1, name: "POTHOS (Epipremnum aureum)", price: 2.07, image: "/images/Pothos.jpg" },
  { id: 2, name: "PHILODENDRON (Philodendron spp.)", price: 3.08, image: "/images/PHILODENDRON.jpg" },
  { id: 3, name: "PRAYER PLANT (Calathea spp.)", price: 1.72, image: "/images/PRAYER PLANT.jpg" },
  { id: 4, name: "BIRD'S NEST FERN (Asplenium nidus)", price: 4.81, image: "/images/BIRD'S NEST FERN.jpg" },
  { id: 5, name: "ZZ PLANT (Zamioculcas zamiifolia)", price: 8.60, image: "/images/ZZ PLANT.jpg" },
  { id: 6, name: "PARLOR PALM (Chamaedorea elegans)", price: 1.70, image: "/images/PARLOR PALM.jpg" },
  { id: 7, name: "PEACE LILY (Spathiphyllum spp.)", price: 3.08, image: "/images/PEACE LILY.jpg" },
  { id: 8, name: "CHINESE EVERGREEN (Aglaonema spp.)", price: 2.22, image: "/images/CHINESE EVERGREEN.jpg" },
  { id: 9, name: "CAST IRON PLANT (Aspidistra elatior)", price: 10.34, image: "/images/CAST IRON PLANT.jpg" },
  { id: 10, name: "FIDDLE LEAF FIG (Ficus lyrata)", price: 15.50, image: "/images/FIDDLE LEAF FIG.jpg" },
  { id: 11, name: "RUBBER PLANT (Ficus elastica)", price: 6.88, image: "/images/RUBBER PLANT.jpg" },
  { id: 12, name: "TRADESCANTIA (Tradescantia spp.)", price: 2.58, image: "/images/TRADESCANTIA.jpg" },
  { id: 13, name: "MONSTERA (Monstera spp.)", price: 6.89, image: "/images/MONSTERA.jpg" },
  { id: 14, name: "WATERMELON PEPEROMIA (Peperomia argyreia)", price: 1.72, image: "/images/WATERMELON PEPEROMIA.jpg" },
  { id: 15, name: "POLKA DOT PLANT (Hypoestes phyllostachya)", price: 3.36, image: "/images/POLKA DOT PLANT.jpg" },
  { id: 16, name: "AFRICAN VIOLET (Saintpaulia ionantha)", price: 2.56, image: "/images/AFRICAN VIOLET.jpg" },
  { id: 17, name: "AIR PLANT (Tillandsia spp.)", price: 1.55, image: "/images/AIR PLANT.jpg" },
  { id: 18, name: "ALOCASIA (Alocasia hybrids)", price: 3.42, image: "/images/ALOCASIA.jpg" },
  { id: 19, name: "SNAKE PLANT (Sansevieria spp.)", price: 1.64, image: "/images/SNAKE PLANT.jpg" },
  { id: 20, name: "JADE PLANT (Crassula ovata)", price: 2.58, image: "/images/JADE PLANT.jpg" },
];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="shop">
      <header className="nav">
        <span className="nav__brand">Plant Shop 🌱</span>
        <div className="nav__search">
          <input
            type="text"
            placeholder="🔍 Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <nav>
          <button className="link" onClick={() => navigate("/products")}>Shop</button>
          <button className="link" onClick={() => navigate("/cart")}>
            🛒 Cart ({cart.reduce((sum, i) => sum + i.qty, 0)})
          </button>
        </nav>
      </header>

      <h2 className="section-title">🌿 Shop Plants</h2>
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.name} className="card-image" />
              <h3>{p.name}</h3>
              <p className="card-price">${p.price}</p>
              <button className="btn" onClick={() => addToCart(p)}>
                🛒 Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="muted">No plants match your search.</p>
        )}
      </div>
    </main>
  );
}