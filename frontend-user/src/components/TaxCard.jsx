// src/components/TaxCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./TaxCard.css";

const TaxCard = ({ title, description }) => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleClick = () => {
    navigate("/taxform"); // ✅ Navigate to TaxForm page
  };

  return (
    <div className="taxcard-container">
      <h2 className="taxcard-title">{title}</h2>
      <div className="taxcard-icon">📝</div>
      <p className="taxcard-description">
        {description ||
          "If you live on or own a home, you pay this tax based on the size and value of your land."}
      </p>
      <button className="taxcard-button" onClick={handleClick}>
        TRY NOW
      </button>
    </div>
  );
};

export default TaxCard;

