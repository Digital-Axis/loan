import React, { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import axios from "axios";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loanCategory: "",
    loanType: "",
    loanProduct: "",
    amount: "",
    duration: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    termsAccepted: false,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const handleSubmit = () => {
    // Add your form submission logic here
    console.log(formData);

    // Example submission using Axios:
    axios.post("https://admin.mightyfinance.co.zm/api/get-loan-products", formData)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  switch (step) {
    case 1:
      return (
        <StepOne
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <StepThree
          prevStep={prevStep}
          handleChange={handleChange}
          handleCheckboxChange={handleCheckboxChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      );
    default:
      return <div>Something went wrong</div>;
  }
}

export default App;
