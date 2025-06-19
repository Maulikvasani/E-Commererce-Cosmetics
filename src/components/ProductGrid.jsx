import React from 'react';
import ProductCard from './ProductCard';
import './styles/ProductGrid.css'; // Assuming styles are in a subfolder

const ProductGrid = ({ title, products }) => (
  <section className="product-grid-section">
    <div className="product-grid-header">
      <h2>{title}</h2>
      <button className="view-all-btn">VIEW ALL</button>
    </div>
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);

export default ProductGrid;
