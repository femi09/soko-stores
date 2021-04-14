import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const OrderConfirmed = () => {
  return (
    <div className="order_confirmed">
      <div className="">
        <div className="party_emoji flex justify-center my-6">
          <img
            className="w-16 h-16"
            src="/assets/images/party-popper-emoji.png"
            alt=""
          />
        </div>
        <div className="text-center px-4 sm:px-0">
          <h1 className="font-bold text-lg">Thank You!</h1>
          <h1 className="font-bold text-lg mb-2">
            Your Order has been placed succesfully
          </h1>
          <p className="text-gray-500">
            You will recieve a message as soon as the order is accepted
          </p>
          <p className="my-6 text-gray-500">Order Number: John - 271e</p>
        </div>
      </div>
      <div className="order_confirm_buttons px-1 sm:w-1/2 sm:mx-auto flex justify-center my-8">
        <button className="btn_transparent font-bold w-1/3 text-xs sm:text-sm lg:w-1/4 rounded-lg py-3">
          Track Order
        </button>
        <Link
          className="w-1/2 btn_primary rounded-lg font-bold text-xs sm:text-sm py-3 lg:w-1/3 px-1 mx-2 sm:mx-4 block"
          to="/"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmed;
