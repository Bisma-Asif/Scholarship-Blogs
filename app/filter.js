"use client";
import { useState } from "react";
import SignUp from "./SignUp";

function SignIn({ visible, onClose }) {
  const SignInOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  if (!visible) return null;
  return (
    <>
      {/* component */}
      {/* Container */}
      <div
        id="container"
        onClick={SignInOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        style={{ zIndex: 999 }}
      >
        <div className="bg-white rounded-3xl">
          <button
            onClick={onClose}
            className="float-right text-bold px-2 text-grey-200 m-2 border-4 rounded-full bg-grey-200  text-2xl"
          >
            X
          </button>
          <div className="container ">
            <div className="flex ">
              {/* Row */}
              <div className="w-full xl:w-3/4 lg:w-full flex">{/* Col */}</div>
            </div>
          </div>
        </div>
      </div>

      <></>
    </>
  );
}

export default SignIn;
