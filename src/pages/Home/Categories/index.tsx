import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./index.css";

const Categories = () => {
  return (
    <div className="hidden sm:block sidebar border-r-2 pt-6 pl-10 border-gray-200">
      <ul className="flex lg:w-2/3 xl:w-1/2 mx-auto flex-col">
        <li className="sidebar_options pb-4">Electronics (12)</li>
        <li className="sidebar_options pb-4">Face Masks (3)</li>
        <li className="sidebar_options pb-4">Fresh Foods (8)</li>
        <li className="sidebar_options pb-4">Grocery (6)</li>
        <li className="sidebar_options pb-4">Home (24)</li>
        <li className="sidebar_options pb-4">Kids (9)</li>
      </ul>
      <div className="sidebar_link flex items-center sidebar_link lg:w-3/4 xl:w-1/2 my-2 mx-auto">
        <p className="mx-1 xl:mr-2">View all categories</p>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Categories;
