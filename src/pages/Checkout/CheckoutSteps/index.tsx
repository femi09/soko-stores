import React from "react";
import "./index.css";

const CheckoutSteps = () => {
  return (
    <div className="checkout_steps ml-8 sm:ml-10 xl:ml-40 lg:ml-20 sm:w-3/4 lg:w-2/3 sm:border-r-2">
      <div className="checkout_steps_content sm:ml-4 xl:mx-0  my-6">
        <div className="account_login relative border-l-2 px-8 pb-20">
          <div className="number_tag number_tag_active">1</div>
          <div className="account_login_info  flex flex-col">
            <h1 className="font-bold mb-2">Account</h1>

            <p className="text-gray-500">
              To place your order, log in by entering your 10 digit mobile number
            </p>
          </div>

          <form className="items-center pt-6" action="">
            <label className="text-gray-500 text-sm font-semibold" htmlFor="">
              Mobile Number
            </label>
            <div className="form_group sm:flex my-2">
              <div className="input_group rounded-md xl:w-1/2 border-2 sm:px-2 py-3 flex">
                <p className="font-bold">+256</p>
                <input
                  className="w-3/4 outline-none px-1 sm:px-2 sm:mx-2"
                  placeholder="Enter mobile number"
                  type="text"
                />
              </div>
              <button className="sm:mx-2 mt-4 sm:mt-0 lg:mx-4 w-1/2 sm:w-1/4 lg:w-1/6 xl:px-0 text-white rounded-md py-3 bg-gray-600 bg-opacity-25 sm:font-bold">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="delivery_address relative  border-l-2 px-8 pb-20">
          <div className="number_tag text-gray-600 bg-white border-2">2</div>
          <h1 className="font-bold mb-2">Delivery Address</h1>
          <p className="text-gray-500 ">
            Select your delivery address from the existing one and add new one
          </p>
        </div>
        <div className="payment  relative px-8">
          <div className="number_tag bg-white text-gray-600 border-2">3</div>
          <h1 className="font-bold mb-2">Payment</h1>
          <p className="text-gray-500">Select your payment method</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
