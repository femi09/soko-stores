import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./index.css";

interface ModalProps {
  open: boolean;
  closeModal: (event: React.MouseEvent<HTMLOrSVGElement>) => void;
}

const VerificationModal: React.FC<ModalProps> = ({ open, closeModal }) => {
  return (
    <div onClick={closeModal} className={`${open ? "modal block" : "hidden"}`}>
      <div className="modal_content w-3/4 sm:mx-0 sm:w-1/2 xl:w-1/3 rounded-lg">
        <div className="modal_content_top border-b-2 pb-4 flex justify-around items-center">
          <h1 className="lg:mx-24 sm:mx-16 mx-6">Verify your payment</h1>
          <CloseIcon onClick={closeModal} />
        </div>
        <div className="text-center modal_content_body w-3/4 mx-auto">
          <p className="py-4 text-gray-500">
            Please enter verification code sent via SMS to +256 76 633 4574
          </p>

          <div className="input_group px-4 sm:px-0 flex justify-center">
            <input
              type="text"
              placeholder="0"
              className="rounded-lg mx-2 focus:outline-none w-12 h-12 text-2xl text-center text-gray-800 bg-gray-200"
            />
            <input
              type="text"
              placeholder="0"
              className="rounded-lg mx-2 focus:outline-none w-12 h-12 text-2xl text-center text-gray-800 bg-gray-200"
            />
            <input
              type="text"
              placeholder="0"
              className="rounded-lg mx-2 focus:outline-none w-12 h-12 text-2xl text-center text-gray-800 bg-gray-200"
            />
            <input
              type="text"
              placeholder="0"
              className="rounded-lg mx-2 focus:outline-none w-12 h-12 text-2xl text-center text-gray-800 bg-gray-200"
            />
          </div>
          <div className="text-center mt-12 mb-8">
            <p>
              Resend Code in{" "}
              <span className="rounded-full border-4 mx-1 p-2">03</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
