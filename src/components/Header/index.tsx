import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./index.css";

const Header = () => {
  return (
    <div className="header border-b-2 pb-6">
      <div className="header_top">
        <Link to="/">
          <h1 className="heading p-4 text-white">
            Store made with SOKO
          </h1>
        </Link>
      </div>

      <div className="header_box sm:flex sm:justify-between items-center py-4">
        <div className="header_box_address px-2 sm:px-0 flex items-center">
          <div className="home_icon  bg-gray-300 bg-gray-100 bg-opacity-25 p-4 rounded-full">
            <img className="w-8 h-8" src="/assets/images/home.png" alt="home" />
          </div>
          <div className="header_address_text mx-4">
            <p className="text-gray-600 text-lg sm:text-xl font-semibold">
              Target
            </p>
            <p className="location text-gray-500 text-sm lg:text-m">
              Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
            </p>
          </div>
        </div>

        <div className="header_box_right text-m flex justify-between px-4 pt-4 sm:p-0  items-center">
          <Link to="/bag">
            <div className="header_bag flex items-center">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="bag_icon"
              />
              <p className="mx-2 lg:mx-4 text-gray-500 sm:font-semibold">Bag</p>
            </div>
          </Link>
          <div className="header_account cursor-pointer flex sm:ml-2 lg:ml-10 items-center">
            <PersonOutlineIcon />
            <p className="mx-2 lg:mx-4 text-gray-500 sm:font-semibold">
              Account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
