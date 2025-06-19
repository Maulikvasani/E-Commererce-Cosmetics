import React from "react";
import "./styles/SocialShowcase.css";

const SocialShowcase = () => {
  const posts = [
    { id: 1, image: "/images/offer1.jpg" },
    { id: 2, image: "/images/offer2.jpg" },
    { id: 3, image: "/images/offer3.jpg" },
    { id: 4, image: "/images/offer4.jpg" }
  ];

  return (
    <div className="social-showcase">
      <h2>#Best Offers</h2>
      <div className="social-grid">
        {posts.map((post) => (
          <img key={post.id} src={post.image} alt="Social Post" />
        ))}
      </div>
    </div>
  );
};

export default SocialShowcase;
