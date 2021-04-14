import React, { useState } from "react";
import VerificationModal from "../../../../components/Modal";
import "./index.css";

const AccountLogin = () => {
  const [mobile, setMobile] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let mobile = e.target.value;

    mobile.length >= 11 ? setDisabled(false) : setDisabled(true);

    setMobile(mobile);
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
  };
  return (
    <div className="account_login relative border-l-2 px-8 xl:pl-12 xl:mx-2 pb-20">
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
              value={mobile}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className={`${
              disabled
                ? "sm:mx-2 mt-4 sm:mt-0 lg:mx-4 w-1/2 sm:w-1/4 lg:w-1/6 xl:px-0 text-white rounded-md py-3 bg-gray-600 bg-opacity-25 sm:font-bold"
                : "btn_primary sm:mx-2 mt-4 sm:mt-0 lg:mx-4 w-1/2 sm:w-1/4 lg:w-1/6 xl:px-0 text-white rounded-md py-3 sm:font-bold"
            }`}
          >
            Login
          </button>
        </div>
      </form>
      <VerificationModal open={open} closeModal={closeModal} />
    </div>
  );
};

export default AccountLogin;
