import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import "./styles/ProductCard.css";

const ProductCard = ({ image, name, price, rating, reviews, mrp, tag }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={i} className={i < rating ? "star-filled" : "star-empty"} />
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      {tag && <span className={`product-tag ${tag.toLowerCase().replace(' ', '-')}`}>{tag}</span>}
      <div className="product-image-container">
        <img src={image} alt={name} />
        <div className="product-actions">
          <button className="action-btn wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
          <button className="action-btn cart-btn-icon"><FontAwesomeIcon icon={faShoppingBag} /></button>
        </div>
      </div>
      <h3>{name}</h3>
      <div className="product-rating">
        {renderStars()}
        <span>({reviews})</span>
      </div>
      <div className="product-price">
        <span className="current-price">Rs. {price}</span>
        {mrp && <span className="mrp-price">MRP Rs. {mrp}</span>}
      </div>
      <p className="inclusive-text">Inclusive of all taxes</p>
      {/* <button className="add-to-cart-main-btn">Add to Cart</button> */}
    </div>
  );
};

export default ProductCard;
