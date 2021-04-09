import React from "react";
import "./index.css";

const HomeBag = () => {
  return (
    <div className="hidden sm:block bag p-6 border-gray-200 w-1/4">
      <p className="mb-6 title">
        Bag <span className="mx-2 px-2 text-white">0</span>
      </p>
      <div className="bag_content flex flex-col items-start text-center px-6">
        <img
          src="https://mysoko.app/static/media/group@3x%203.2d2dde74.jpg"
          alt=""
          className="sad_emoji mb-4 mx-4 lg:mx-10"
        />
        <div className="bag_content_info xl:w-2/3">
          <h1>It's empty here</h1>
          <p>Start shopping to add items to your bag</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBag;
