import React, { useState, useEffect } from "react";
import "./styles/HeroSection.css";

const slides = [
  {
    image: "/images/hero-banner.jpg",
    heading: "Experience the Tanginess",
  },
  {
    image: "/images/hero-banner2.jpg",
    heading: "Fragrance Festival",
  },
  {
    image: "/images/hero-banner3.jpg",
    heading: "Glow Naturally with Oriflame Skincare",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <img
        src={slides[currentSlide].image}
        alt="Oriflame Banner"
        className="hero-img"
      />
      <div className="hero-text">
        <h1>{slides[currentSlide].heading}</h1>
        <button className="shop-now">SHOP NOW</button>
      </div>
    </div>
  );
};

export default HeroSection;
