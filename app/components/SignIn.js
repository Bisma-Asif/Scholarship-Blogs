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
              <div className="w-full xl:w-3/4 lg:w-full flex">
                {/* Col */}
                <div className="w-full h-auto bg-blue-900 hidden lg:block lg:w-full bg-cover rounded-l-lg">
                  <p className="text-center py-28 font-bold text-3xl pb-6">
                    <span className="text-white-600">LOGO</span>
                  </p>
                  <img
                    src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
                    alt=""
                    className="thumbnail w-full h-3/5 mt-24 rounded-3xl"
                  />
                </div>

                {/* Col */}
                <div className="lg:w-full bg-white p-5 pl-20 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-4xl font-bold">
                    Sign into your Account
                  </h3>
                  <form className=" pt-6 pb-8 mb-4 bg-white rounded justify-center">
                    <div className="mb-4 md:flex md:justify-between"></div>
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-lg font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-5 py-5 mb-3 text-lg leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4 md:flex md:justify-between"></div>
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-lg font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-5 py-5 mb-3 text-lg leading-tight text-gray-700 border border-red-500 rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="mb-6 text-center">
                      <button
                        className="w-2/4 mt-10   text-2xl font-bold text-white bg-blue-900 rounded-2xl hover:bg-blue-700 focus:outline-none focus:shadow-outline lg:px-4 py-3.5 md:px-6"
                        type="button"
                      >
                        Sign Up
                      </button>
                      <div className="mt-5">
                        <h2>
                          Do you have an Account ?
                          <span className="text-blue-900">SignUp</span>
                        </h2>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <></>
    </>
  );
}

export default SignIn;
