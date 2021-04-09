import React from "react";
import CheckoutSteps from "./CheckoutSteps";
import OrderSummary from "./OrderSummary";
import "./index.css";

const Checkout = () => {
  return (
    <div className="checkout mb-8 flex">
      <CheckoutSteps />
      <OrderSummary />
    </div>
  );
};

export default Checkout;
