import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top p-4 sm:p-8">
        <div className="footer_features_container flex items-center justify-around xl:w-1/2 mx-auto">
          <div className="footer_feature_items flex flex-col items-center">
            <div className="footer_feature_icon">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="footer_feature_text text-center text-white my-4">
              Fast Delivery
            </div>
          </div>
          <div className="footer_features_item flex flex-col items-center">
            <div className="footer_feature_icon">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="footer_feature_text text-center text-white my-4">
              Buyer Protection
            </div>
          </div>
          <div className="footer_features_item items-center flex flex-col">
            <div className="footer_feature_icon">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="footer_feature_text text-center text-white my-4">
              Customer Support
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom py-8">
        <div className="footer_bottom_container text-center w-2/3 sm:w-1/2 mx-auto">
          <p className="text-gray-400 my-4">STORE DETAILS</p>
          <h1 className="font-bold text-xl">Target</h1>
          <p className="mt-2 mb-4">Charm Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
          <button className="chat_button rounded-md mt-4 text-white p-2">
            <WhatsAppIcon />
            Chat with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
