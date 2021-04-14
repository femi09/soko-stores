import React from "react";
import "./index.css";

const OrderSummary = () => {
  return (
    <div className="hidden sm:block checkout_order_summary xl:w-1/3">
      <div className="checkout_order_summary_content my-6 sm:px-4 xl:w-3/4">
        <div className="checkout_order_summary_top flex justify-between items-center">
          <p className="title font-bold">
            Bag <span className="mx-2 px-3 py-1 rounded-md text-white">0</span>
          </p>
          <p className="clear_bag text-gray-600">Clear Bag</p>
        </div>

        <div className="checkout_order_summary_body py-8 border-b-2">
          <div className="checkout_bag_items flex items-end justify-between my-8">
            <div className="bag_item">
              <h1 className="bag_item_name font-bold text-sm">
                Earrings and Mangtikka
              </h1>
              <p className="per_piece text-sm text-gray-500 mb-4">Per piece</p>

              <h1 className="bag_item_price text-gray-500">UGX 118,400</h1>
              <p className="text-gray-400 text-sm">
                <s>UGX 148,000</s>
              </p>
            </div>
            <button className="flex">
              <div className="w-1/3 p-1 decrease">-</div>
              <div className="w-1/3 p-1 quantity">1</div>
              <div className="w-1/3 p-1 increase">+</div>
            </button>
          </div>

          <div className="checkout_bag_items flex items-end justify-between">
            <div className="bag_item">
              <h1 className="bag_item_name font-bold text-sm">
                Colorful Earrings Jhumki{" "}
              </h1>
              <p className="per_piece text-sm text-gray-500 mb-4">Per piece</p>

              <h1 className="bag_item_price text-gray-500">UGX 118,400</h1>
            </div>
            <button className="flex">
              <div className="w-1/3 p-1 decrease">-</div>
              <div className="w-1/3 p-1 quantity">5</div>
              <div className="w-1/3 p-1 increase">+</div>
            </button>
          </div>
        </div>

        <div className="amount py-4">
          <div className="sub_total my-1 flex justify-between">
            <p>Subtotal</p>
            <p className="text-right">UGX 12700</p>
          </div>
          <div className="sub_total flex justify-between">
            <p>Delivery</p>
            <p className="text-right free font-semibold">Free</p>
          </div>
        </div>

        <div className="total_amount py-4">
          <div className="total my-1 flex font-bold justify-between">
            <p>Total</p>
            <p className="text-right">UGX 12700</p>
          </div>
          <div className="total my-1 flex text-sm text-gray-500 justify-between">
            <p className="mini_text">inclusive of all taxes</p>
          </div>
        </div>
        <p className="order_info text-sm my-4 font-semibold">
          You are about to save UGX27,400 on this order
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
