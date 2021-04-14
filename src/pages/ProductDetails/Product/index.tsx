import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Product = () => {
  return (
    <div className="product_details_container sm:flex">
      <div className="product_image sm:mr-6 xl:mr-8">
        <img
          className="rounded-lg"
          src="/assets/images/norbury_scandinavian.jpg"
          alt=""
        />
        <div className="slide_circles flex w-2/3 justify-center mx-auto mb-8 mt-2">
          <div className="circle active rounded-full mr-1"></div>
          <div className="circle rounded-full mr-1 bg-blue-200"></div>
          <div className="circle rounded-full mr-1 bg-blue-200"></div>
          <div className="circle rounded-full mr-1 bg-blue-200"></div>
        </div>
      </div>

      <div className="product_description_container">
        <div className="mt-3 mb-4 lg:mt-6 lg:mb-8">
          <h1 className="product_name font-bold text-xl my-4">
            Norbury Scandinavian Wood Leg Ottoman
          </h1>
          <p className="product_description">
            Sold as piece, Wooden upholstered ottoman lends a laid-back appeal
            to your indoor space. Comes with soft padding for extra comfort and
            support. Solid wooden and metal frame ensures durable, long-lasting
            use. Great as footrest or extra seat when entertaining guests
          </p>
        </div>

        <div className="product_price_container">
          <div className="product_price flex">
            <h1 className="mr-8 font-bold text-lg">UGX 118,400</h1>
            <span className="bg-red-500 py-1 px-2 rounded-sm text-white rounded-md text-sm">
              -20%
            </span>
          </div>
          <p className="text-gray-400 mb-3 lg:mb-6">
            <s>UGX 148,000</s>
          </p>

          <button className="flex">
            <div className="w-1/3 p-1 decrease">-</div>
            <div className="w-1/3 p-1 quantity">1</div>
            <div className="w-1/3 p-1 increase">+</div>
          </button>
        </div>

        <div className="product_action_buttons flex my-8 sm:mt-5 lg:mt-10 xl:mt-20 mb-4">
          <button className="py-2 font-bold rounded-md w-1/2 sm:w-1/3 btn_transparent">
            Add to Bag
          </button>
          <Link
            className="py-2 font-bold rounded-md w-1/2 sm:w-1/3 mx-2 sm:mx-6 btn_primary"
            to="/checkout"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
