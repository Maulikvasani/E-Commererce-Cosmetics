import React from "react";
import "../components/styles/WeightManagement.css";

const weightProducts = [
  { id: 1, name: "Wellosophy Nutri-Veg Set-Strawberry", image: "/images/offer1.jpg", rating: 4.5, reviews: 0, price: "4,048", mrp: "4,048" },
  { id: 2, name: "Wellosophy Nutri-Veg Set-Chocolate", image: "/images/offer2.jpg", rating: 4.5, reviews: 0, price: "4,048", mrp: "4,048" },
  { id: 3, name: "Wellosophy Nutri-Veg Set-Vanilla", image: "/images/offer3.jpg", rating: 4.5, reviews: 0, price: "4,048", mrp: "4,048" },
  { id: 4, name: "Wellosophy NutriMeal Vanilla Flavour", image: "/images/offer4.jpg", rating: 4.5, reviews: 35, price: "1,999", mrp: "1,999" },
  { id: 5, name: "Wellosophy NutriMeal Chocolate Flavour", image: "/images/wellness.jpg", rating: 4.5, reviews: 30, price: "1,999", mrp: "1,999" },
  { id: 6, name: "Wellosophy Scoop", image: "/images/hero-banner2.jpg", rating: 4.5, reviews: 67, price: "349", mrp: "349" },
  { id: 7, name: "Wellosophy Smartshake Bottle", image: "/images/hero-banner3.jpg", rating: 4.5, reviews: 55, price: "899", mrp: "899" }
];

const WeightManagement = () => {
  return (
    <div className="nutrition-page">
      <div className="nutrition-header">
        <div className="nutrition-breadcrumb">Home &gt; Nutrition &gt; Weight Management</div>
        <div className="nutrition-title">Weight Management</div>
      </div>
      <div className="nutrition-toolbar">
        <div className="nutrition-filter">&#x1F50D; FILTER</div>
        <div className="nutrition-count">{weightProducts.length} products</div>
        <div className="nutrition-recommended">&#x21C5; RECOMMENDED</div>
      </div>
      <div className="nutrition-grid">
        {weightProducts.map((prod) => (
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

export default WeightManagement;