import React from "react";
import "../components/styles/DailyWellbeing.css";

const dailyProducts = [
  { id: 1, name: "Wellosophy Iron Complex", image: "/images/offer3.jpg", rating: 4.5, reviews: 24, price: "399", mrp: "399" },
  { id: 2, name: "Wellosophy Wellness Pack", image: "/images/offer1.jpg", rating: 4.5, reviews: 119, price: "3,299", mrp: "3,299" },
  { id: 3, name: "Wellosophy Scoop", image: "/images/offer2.jpg", rating: 4.5, reviews: 67, price: "349", mrp: "349" },
  { id: 4, name: "Wellosophy Nutrishake Natural Vanilla Flavour", image: "/images/offer4.jpg", rating: 4.5, reviews: 66, price: "3,299", mrp: "3,299" },
  { id: 5, name: "Wellosophy Nutrishake Natural Strawberry Flavour", image: "/images/wellness.jpg", rating: 4.5, reviews: 34, price: "3,299", mrp: "3,299" },
  { id: 6, name: "Wellosophy Smartshake Bottle", image: "/images/hero-banner2.jpg", rating: 4.5, reviews: 55, price: "899", mrp: "899" },
  { id: 7, name: "Wellosophy Nutrishake Natural Chocolate Flavour", image: "/images/hero-banner3.jpg", rating: 4.5, reviews: 68, price: "3,299", mrp: "3,299" }
];

const DailyWellbeing = () => {
  return (
    <div className="nutrition-page">
      <div className="nutrition-header">
        <div className="nutrition-breadcrumb">Home &gt; Nutrition &gt; Daily Wellbeing</div>
        <div className="nutrition-title">Daily Wellbeing</div>
      </div>
      <div className="nutrition-toolbar">
        <div className="nutrition-filter">&#x1F50D; FILTER</div>
        <div className="nutrition-count">{dailyProducts.length} products</div>
        <div className="nutrition-recommended">&#x21C5; RECOMMENDED</div>
      </div>
      <div className="nutrition-grid">
        {dailyProducts.map((prod) => (
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

export default DailyWellbeing;