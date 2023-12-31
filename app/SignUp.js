"use client";
import { useState } from "react";

function SignUp({ visible, onClose }) {
  const handleOnClose = (e) => {
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
        onClick={handleOnClose}
        className="fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        style={{ zIndex: 999 }}
      >
        <div className="bg-white p-2 rounded">
          <button
            onClick={onClose}
            className="float-right p-5 rounded-full bg-grey-200  text-2xl"
          >
            X
          </button>
          <div className="">
            <div className="flex  ">
              {/* Row */}
              <div className="w-full md:w-3/4  flex">
                {/* Col */}
                <div className="w-full h-full bg-blue-900 hidden lg:block lg:w-4/6 bg-cover rounded-l-lg">
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
                <div className="w-full lg-w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-2xl text-center">
                    Create an Account!
                  </h3>
                  <form className="pt-6 pb-8 mb-4 bg-white rounded lg:px-2  sm:px-2">
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                          className="block mb-2 text-lg font-bold text-gray-700"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <input
                          className="w-1/6 mt-4 mr-40 px-2 py-5 text-lg leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="">
                        <label
                          className="block mb-2 text-lg font-bold text-gray-700"
                          htmlFor="lastName"
                        >
                          Last Name
                        </label>
                        <input
                          className="w-1/6 mt-4 px-4 py-5 text-lg leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block mt-20 mb-2 text-lg font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-1/6  px-2 py-5 mb-3 text-lg leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label
                          className="block mt-20 mb-2 text-lg font-bold text-gray-700"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          className="w-1/6 px-2 py-5 mb-3 text-lg leading-tight text-gray-700 border border-red-500 rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="md:ml-2">
                        <label
                          className="block mt-20 mb-2 text-lg font-bold text-gray-700"
                          htmlFor="c_password"
                        >
                          Confirm Password
                        </label>
                        <input
                          className="w-1/6 px-2 ml-2 py-5 mb-3 text-lg leading-tight text-gray-700 border rounded-xl shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="c_password"
                          type="password"
                          placeholder="confirm password"
                        />
                      </div>
                    </div>
                    <label className="inline-flex items-center mt-20 ">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-primary border-primary rounded focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-8">
                        I accept all terms and conditions
                      </span>
                    </label>
                    <div className="mb-6 text-center">
                      <button
                        className="w-2/4 mt-10  py-3.5 text-2xl font-bold text-white bg-blue-900 rounded-2xl hover:bg-blue-700 focus:outline-none focus:shadow-outline lg:px-4 sm:px-8"
                        type="button"
                      >
                        Sign Up
                      </button>
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

export default SignUp;
