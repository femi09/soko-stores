import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import "./index.css";

const DeliveryAddress = () => {
  return (
    <div className="delivery_address relative  border-l-2 px-8 pb-20">
      <div className="number_tag text-gray-600 bg-white border-2">2</div>
      <h1 className="font-bold mb-2">Delivery Address</h1>
      <p className="text-gray-500 ">
        Select your delivery address from the existing one and add new one
      </p>
      <div className="addresses my-6 sm:w-2/3 flex flex-col xl:flex-row">
        <div className="default_address relative p-2 rounded-lg xl:w-1/2">
          <h1 className="p-1 font-bold">Shrey Karah</h1>
          <p className="p-1 text-sm text-gray-500">
            Quench Ville, plot 12 Nkuruma Rd, Kampala, Uganda
          </p>
          <p className="p-1">+256 76 633 4574</p>
          <div className="selected_icon absolute rounded-full top-0 font-bold right-0">
            <DoneIcon />
          </div>
        </div>

        <div className="select_address flex xl:mx-4 rounded-lg flex-col items-center h-32 xl:h-auto justify-center my-6 xl:my-0 xl:w-1/2">
          <p>+ Add New Address</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
