import React from "react";
import "../components/styles/Skincare.css";

const skincareTabs = [
  "MOISTURISERS",
  "EYE CARE",
  "CLEANSE",
  "CONCERNS",
  "TONER",
  "ESSENCES AND MIST",
  "MASK"
];

const skincareProducts = [
  { id: 1, name: "Essentials Fairness Gel Wash", image: "/images/skincare.jpg", rating: 4.5, reviews: 120, price: "329", mrp: "329" },
  { id: 2, name: "Optimals Hydra Radiance Day Cream", image: "/images/offer1.jpg", rating: 4.2, reviews: 95, price: "899", mrp: "899" },
  { id: 3, name: "Love Nature Soothing Mask", image: "/images/offer2.jpg", rating: 4.7, reviews: 102, price: "499", mrp: "499" },
  { id: 4, name: "Optimals Purifying Toner", image: "/images/offer3.jpg", rating: 4.3, reviews: 88, price: "599", mrp: "599" },
  { id: 5, name: "Essences & Mist by NovAge", image: "/images/offer4.jpg", rating: 4.6, reviews: 130, price: "1099", mrp: "1099" }
];

const Skincare = () => {
  return (
    <div className="nutrition-page">
      <div className="nutrition-header">
        <div className="nutrition-breadcrumb">Home &gt; Skincare</div>
        <div className="nutrition-title">Skincare</div>
      </div>
      <div className="nutrition-tabs">
        {skincareTabs.map((tab, idx) => (
          <div className="nutrition-tab" key={idx}>{tab}</div>
        ))}
      </div>
      <div className="nutrition-toolbar">
        <div className="nutrition-filter">&#x1F50D; FILTER</div>
        <div className="nutrition-count">{skincareProducts.length} products</div>
        <div className="nutrition-recommended">&#x21C5; RECOMMENDED</div>
      </div>
      <div className="nutrition-grid">
        {skincareProducts.map((prod) => (
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

export default Skincare;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////''''''''