import React from 'react';
import './styles/DigitalBeautyAssessment.css';

const DigitalBeautyAssessment = () => {
  return (
    <section className="digital-beauty-assessment">
      <div className="assessment-image">
        <img src="/images/digital-assessment.jpg" alt="Digital Beauty Assessment" />
      </div>
      <div className="assessment-content">
        <h2>DIGITAL BEAUTY ASSESSMENT</h2>
        <p>Discover personalized beauty recommendations with our AI-powered Beauty tools. Your tailored skin analysis, hair care routine, and wellness assessment are just a click away.</p>
        <button className="know-more-btn">KNOW MORE</button>
      </div>
    </section>
  );
};

export default DigitalBeautyAssessment;