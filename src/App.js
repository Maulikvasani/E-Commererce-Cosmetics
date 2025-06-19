import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nutrition from "./pages/Nutrition";
import DailyWellbeing from "./pages/DailyWellbeing";
import WeightManagement from "./pages/WeightManagement";
import Beauty from "./pages/Beauty";
import Skincare from "./pages/Skincare";
import Immunity from "./pages/Immunity";
import { CartProvider } from "./context/CartContext";
import "./styles/App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/daily-wellbeing" element={<DailyWellbeing />} />
          <Route path="/weight-management" element={<WeightManagement />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/immunity" element={<Immunity />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
