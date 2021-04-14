import React from "react";
import AccountLogin from "./AccountLogin";
import DeliveryAddress from "./DeliveryAddress";
import Payment from "./Payment";
import "./index.css";

const CheckoutSteps = () => {
  return (
    <div className="checkout_steps ml-8 sm:ml-10 xl:ml-40 lg:ml-20 sm:w-3/4 lg:w-2/3 sm:border-r-2">
      <div className="checkout_steps_content sm:ml-4 xl:mx-0  my-6">
        <AccountLogin />
        <DeliveryAddress />
        <Payment />
      </div>
    </div>
  );
};

export default CheckoutSteps;
