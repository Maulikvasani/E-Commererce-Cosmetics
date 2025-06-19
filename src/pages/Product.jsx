import React from "react";
import ProductCard from "../components/ProductCard";
import "./styles/Product.css";

const Product = () => {
  const dummyProducts = [
    { id: 1, image: "/images/product1.jpg", name: "Lipstick", price: 299 },
    { id: 2, image: "/images/product2.jpg", name: "Face Wash", price: 199 },
    { id: 3, image: "/images/product3.jpg", name: "Day Cream", price: 499 },
  ];

  return (
    <div className="product-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {dummyProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            image={prod.image}
            name={prod.name}
            price={prod.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
