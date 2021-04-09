import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Bag = () => {
  return (
    <div className="bag_container flex flex-col items-center text-center">
      <div className="empty_bag_emoji">
        <img
          src="https://mysoko.app/static/media/group@3x%203.2d2dde74.jpg"
          alt=""
          className="w-48 h-48"
        />
      </div>
      <div className="bag_content_info my-4">
        <h1 className="font-bold text-lg my-1">It's empty here</h1>
        <p className="text-gray-400">Start shopping to add items to your bag</p>
      </div>

      <div className="bag_buttons my-8">
        <Link to="/">
          <button className="p-4 font-bold rounded-md focus:outline-none w-64 btn_primary">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bag;
