import React from "react";
import "./styles/ProductCategories.css";

const ProductCategories = () => {
  const categories = [
    { name: "Skincare", image: "/images/skincare.jpg" },
    { name: "Makeup", image: "/images/makeup.jpg" },
    { name: "Fragrance", image: "/images/fragrance.jpg" },
    { name: "Wellness", image: "/images/wellness.jpg" }
  ];

  return (
    <div className="categories-section">
      <h2>Shop by Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
