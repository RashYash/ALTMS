import React, { useState } from 'react';
import './TaxForm.css';

export default function TaxForm() {
  const [formData, setFormData] = useState({
    perSquareMeter: 0.4,
    landSize: 500,
    percentageOfLandValue: 0.005,
    landValue: 100000,
    regionFactor: 150,
    regionAdjustment: 1,
    growthAdjustment: 20,
    taxRate: 3.5,
    baseTax: 2000,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) });
  };

  const calculateTax = () => {
    const {
      perSquareMeter,
      landSize,
      percentageOfLandValue,
      landValue,
      regionFactor,
      regionAdjustment,
      growthAdjustment,
      taxRate,
      baseTax,
    } = formData;

    const amount =
      perSquareMeter * landSize +
      percentageOfLandValue * landValue +
      regionFactor * regionAdjustment +
      growthAdjustment * taxRate +
      baseTax;

    setResult(amount.toFixed(2));
  };

  return (
    <div className="taxform-container">
      <h2 className="taxform-title">Land Tax Prediction Form</h2>
      <div className="taxform-grid">
        {Object.keys(formData).map((key) => (
          <div className="taxform-group" key={key}>
            <label className="taxform-label">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="number"
              name={key}
              className="taxform-input"
              value={formData[key]}
              onChange={handleChange}
              step="any"
            />
          </div>
        ))}
      </div>
      <button className="taxform-button" onClick={calculateTax}>Calculate</button>

      {result && (
        <div className="taxform-result">
          <h3>Predicted Tax Amount: {result} LKR</h3>
        </div>
      )}
    </div>
  );
}
