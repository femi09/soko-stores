import React from "react";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Link } from "react-router-dom";
import "./index.css";

const Payment = () => {
  return (
    <div className="payment relative px-8 xl:pl-12  xl:mx-2">
      <div className="number_tag bg-white text-gray-600 border-2">3</div>
      <h1 className="font-bold mb-2">Payment</h1>
      <p className="text-gray-500">Select your payment method</p>

      <div className="payment_method flex items-center mt-4">
        <div className="radio_button_icon">
          <RadioButtonCheckedIcon />
        </div>
        <p className="mx-4 text-gray-500">Cash on Delivery</p>
      </div>
      <Link to="/order_confirmed">
        <button className="btn_primary w-1/2 sm:w-1/3 xl:w-1/4 py-2 font-bold rounded-md my-8">
          Place Order
        </button>
      </Link>
    </div>
  );
};

export default Payment;
