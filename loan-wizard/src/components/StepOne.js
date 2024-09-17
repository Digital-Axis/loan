import React, { useEffect, useState } from "react";
import axios from "axios";

const StepOne = ({ nextStep, handleChange, formData }) => {
  const [loanProducts, setLoanProducts] = useState([]);

  useEffect(() => {
    axios.get("https://admin.mightyfinance.co.zm/api/get-loan-products")
      .then((response) => {
        setLoanProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching loan products:", error);
      });
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h2>Step 1: Loan Details</h2>
      <form onSubmit={handleNext}>
        <label>
          Loan Category:
          <input
            type="text"
            value={formData.loanCategory}
            onChange={handleChange("loanCategory")}
          />
        </label>
        <br />
        <label>
          Loan Type:
          <input
            type="text"
            value={formData.loanType}
            onChange={handleChange("loanType")}
          />
        </label>
        <br />
        <label>
          Loan Product:
          <select value={formData.loanProduct} onChange={handleChange("loanProduct")}>
            <option>Select a product</option>
            {loanProducts.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={formData.amount}
            onChange={handleChange("amount")}
          />
        </label>
        <br />
        <label>
          Duration (Months):
          <input
            type="number"
            value={formData.duration}
            onChange={handleChange("duration")}
          />
        </label>
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepOne;
