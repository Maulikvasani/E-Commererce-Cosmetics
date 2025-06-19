import React from "react";
import "../components/styles/Nutrition.css";

const nutritionTabs = [
  "NUTRITION",
  "DAILY WELLBEING",
  "WEIGHT MANAGEMENT",
  "BEAUTY",
  "HEALTHY AGEING",
  "IMMUNITY"
];

const nutritionProducts = [
  { id: 1, name: "Wellosophy Omega 3", image: "/images/wellness.jpg", rating: 4.5, reviews: 595, price: "1,899", mrp: "1,899" },
  { id: 2, name: "Wellosophy NutriMeal Vanilla Flavour", image: "/images/offer1.jpg", rating: 4.5, reviews: 35, price: "1,999", mrp: "1,999" },
  { id: 3, name: "Wellosophy NutriMeal Chocolate Flavour", image: "/images/offer2.jpg", rating: 4.5, reviews: 30, price: "1,999", mrp: "1,999" },
  { id: 4, name: "Wellosophy Iron Complex", image: "/images/offer3.jpg", rating: 4.5, reviews: 24, price: "399", mrp: "399" },
  { id: 5, name: "Wellosophy Astaxanthin & Bilberry Extract", image: "/images/offer4.jpg", rating: 4.5, reviews: 195, price: "2,099", mrp: "2,099" }
];

const Nutrition = () => {
  return (
    <div className="nutrition-page">
      <div className="nutrition-header">
        <div className="nutrition-breadcrumb">Home &gt; Nutrition</div>
        <div className="nutrition-title">Nutrition</div>
      </div>
      <div className="nutrition-tabs">
        {nutritionTabs.map((tab, idx) => (
          <div className="nutrition-tab" key={idx}>{tab}</div>
        ))}
      </div>
      <div className="nutrition-toolbar">
        <div className="nutrition-filter">&#x1F50D; FILTER</div>
        <div className="nutrition-count">{nutritionProducts.length} products</div>
        <div className="nutrition-recommended">&#x21C5; RECOMMENDED</div>
      </div>
      <div className="nutrition-grid">
        {nutritionProducts.map((prod) => (
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

export default Nutrition;