import React from "react";
import "../components/styles/Beauty.css";

const beautyProducts = [
  { id: 1, name: "Wellosophy Astaxanthin & Bilberry Extract", image: "/images/offer1.jpg", rating: 4.5, reviews: 195, price: "2,099", mrp: "2,099" }
];

const Beauty = () => {
  return (
    <div className="nutrition-page">
      <div className="nutrition-header">
        <div className="nutrition-breadcrumb">Home &gt; Nutrition &gt; Beauty</div>
        <div className="nutrition-title">Beauty</div>
      </div>
      <div className="nutrition-toolbar">
        <div className="nutrition-filter">&#x1F50D; FILTER</div>
        <div className="nutrition-count">{beautyProducts.length} products</div>
        <div className="nutrition-recommended">&#x21C5; RECOMMENDED</div>
      </div>
      <div className="nutrition-grid">
        {beautyProducts.map((prod) => (
          <div className="nutrition-card" key={prod.id}>
            <img src={prod.image} alt={prod.name} className="nutrition-img" />
            <div className="nutrition-card-body">
              <div className="nutrition-card-title">{prod.name}</div>
              <div className="nutrition-card-rating">
                <span className="nutrition-stars">{"★".repeat(Math.floor(prod.rating))}{prod.rating % 1 ? "½" : ""}</span>
                <span className="nutrition-reviews">({prod.reviews})</span>
              </div>
              <div className="nutrition-card-price">MRP Rs. {prod.price}</div>
              <div className="nutrition-card-mrp">Inclusive of all taxes</div>
            </div>
            <button className="nutrition-card-fav">♡</button>
            <button className="nutrition-card-cart">🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beauty;