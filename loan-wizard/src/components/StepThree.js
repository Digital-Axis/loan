import React from "react";

const StepThree = ({ prevStep, handleChange, handleCheckboxChange, handleSubmit, formData }) => {
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      handleSubmit();
    } else {
      alert("You must accept the terms and conditions");
    }
  };

  return (
    <div>
      <h2>Step 3: Loan Summary</h2>
      <div>
        <h3>Loan Details</h3>
        <p>Loan Category: {formData.loanCategory}</p>
        <p>Loan Type: {formData.loanType}</p>
        <p>Loan Product: {formData.loanProduct}</p>
        <p>Amount: {formData.amount}</p>
        <p>Duration: {formData.duration} months</p>
      </div>

      <div>
        <h3>Personal Information</h3>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>

      <form onSubmit={handleFinalSubmit}>
        <label>
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={handleCheckboxChange}
          />
          I accept the terms and conditions
        </label>
        <br />
        <button onClick={prevStep}>Back</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StepThree;
