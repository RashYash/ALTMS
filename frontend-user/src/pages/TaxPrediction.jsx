import React from "react";
import TaxCard from "../components/TaxCard";
import "./TaxPrediction.css"; // 🔗 Link to separate CSS

export default function TaxPrediction() {
  return (
    <div className="app-container">
      

     

      <main className="main-section">
        <h1 className="main-title">
          PROVINCIAL LAND COMMISSIONAL DEPARTMENT
          <br />
          <h4 className="sub-title">(WESTERN PROVINCE) SRI LANKA</h4>
        </h1>

        <div className="card-wrapper">
          <h2 className="section-heading">
            <span className="highlight">TAX Prediction Section</span>
          </h2>
          <div className="card-grid">
            <TaxCard
              title="Residents Tax"
              description="If you live on or own a home, you pay this tax based on the size and value of your land."
            />
            <TaxCard
              title="Agriculture Tax"
              description="This tax applies to agricultural land and is calculated based on land use and productivity."
            />
            <TaxCard
              title="Commercial Tax"
              description="Commercial properties are taxed according to their business use and property value."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

