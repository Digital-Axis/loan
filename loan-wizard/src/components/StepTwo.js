import React from "react";

const StepTwo = ({ nextStep, prevStep, handleChange, formData }) => {
  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h2>Step 2: Personal Information</h2>
      <form onSubmit={handleNext}>
        <label>
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            value={formData.phone}
            onChange={handleChange("phone")}
          />
        </label>
        <br />
        <button onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StepTwo;
