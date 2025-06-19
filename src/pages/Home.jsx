import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import DigitalBeautyAssessment from "../components/DigitalBeautyAssessment";
import SocialShowcase from "../components/SocialShowcase";
// import ProductCategories from "../components/ProductCategories"; // Assuming this might be replaced or integrated elsewhere
import "./styles/Home.css";

// Sample data - replace with actual data source or API call
const whatsNewProducts = [
  { id: 1, name: 'GLACIER Extreme Eau De Toilette', price: '1,199', mrp: '2,759', rating: 4, reviews: 304, image: '/images/offer1.jpg', tag: 'NEW PRODUCT' },
  { id: 2, name: 'TENDER CARE Sweet Mandarin Multi-purpose Balm', price: '199', mrp: '439', rating: 5, reviews: 1246, image: '/images/offer2.jpg', tag: 'NEW PRODUCT' },
  { id: 3, name: 'LOVE NATURE Up-Loved Energising Hand Cream with Upcycled Lemon, Organic...', price: '279', mrp: '389', rating: 4, reviews: 149, image: '/images/offer3.jpg', tag: 'NEW PRODUCT' },
  // Add more products as needed
];

const iconsOfOurTimeProducts = [
  { id: 4, name: 'TENDER CARE Sweet Mandarin Multi-purpose Balm', price: '199', mrp: '439', rating: 5, reviews: 1246, image: '/images/offer2.jpg', tag: 'NEW PRODUCT' },
  { id: 5, name: 'ROYAL VELVET Firming Night Cream', price: '1,679', mrp: '2,099', rating: 4, reviews: 926, image: '/images/skincare.jpg', tag: 'NEW PRODUCT' }, // Replace with actual image
  { id: 6, name: 'GIORDANI GOLD Serum Infused Bronzing Pearls', price: '1,599', mrp: '1,999', rating: 5, reviews: 538, image: '/images/makeup.jpg' }, // Replace with actual image
  { id: 7, name: 'GIORDANI GOLD Essenza Parfum', price: '5,499', rating: 4, reviews: 1464, image: '/images/fragrance.jpg' }, // Replace with actual image
];

const bestOffersProducts = [
  { id: 8, name: 'MILK & HONEY GOLD Classic Grace Hand & Body Cream', price: '425', mrp: '849', rating: 4, reviews: 44, image: '/images/offer4.jpg', tag: 'SUPERDEAL' },
  { id: 9, name: 'GIORDANI GOLD Age Defying Serum Boost Foundation SPF 12 UVA Protection', price: '1,299', mrp: '1,999', rating: 5, reviews: 1006, image: '/images/skincare.jpg' }, // Replace with actual image
  { id: 10, name: 'THE ONE High Impact Eye Pencil', price: '465', mrp: '669', rating: 4, reviews: 1186, image: '/images/makeup.jpg' }, // Replace with actual image
  { id: 11, name: 'ONCOLOUR Oh! Sweet Glossy', price: '199', mrp: '319', rating: 4, reviews: 766, image: '/images/offer1.jpg' }, // Replace with actual image
];

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <div className="main-content">
        <div className="home-section product-grid-container">
          <ProductGrid title="What's new" products={whatsNewProducts} />
        </div>
        <div className="home-section product-grid-container">
          <ProductGrid title="Icons of our time" products={iconsOfOurTimeProducts} />
        </div>
        <div className="home-section product-grid-container">
          <ProductGrid title="Best offers" products={bestOffersProducts} />
        </div>
        <div className="home-section digital-beauty-assessment-container">
          <DigitalBeautyAssessment />
        </div>
        <div className="home-section social-showcase-container">
          <SocialShowcase />
        </div>
      </div>
    </div>
  );
};

export default Home;
