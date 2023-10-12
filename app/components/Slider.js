"use client";
import React from "react";
// import SwiperCore, { Autoplay, Navigation } from "swiper/core";
// import "swiper/css"; // Import the Swiper CSS
// import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

SwiperCore.use([Autoplay]);

function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      autoplay: {
        delay: 3000, // Set the delay in milliseconds (e.g., 5000ms or 5 seconds)
        disableOnInteraction: false, // Allow autoplay to continue after user interactions
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <>
      <swiper-container ref={swiperRef} init="false">
        <swiper-slide class="">
          <div className="  mb-20 bg-white w-full   rounded-3xl -mt-10 lg:px-40 ">
            <section className="justify-center">
              {" "}
              {/* Corrected 'secction' to 'section' */}
              <div className="flex flex-col lg:flex-row md: mx-3.5    rounded-lg">
                <img
                  src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
                  alt=""
                  className="thumbnail"
                />
                <div className="lg:ml-10 w-72 mt-20  mx-5 text-center sm:w-full">
                  <h2 className="font-bold font-sans lg:text-7xl sm: text-5xl">
                    Achieve your dreams
                  </h2>
                  <p className="pt-4 text-2xl font-sans mt-8 ">
                    Access scholarships that match your education financial
                    needs and achieve your goals.
                  </p>
                  <button
                    type="button"
                    className="px-auto rounded-full  mt-28 bg-indigo-600 px-10 py-6 mb-10 text-2xl leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-7/12  sm:p-5"
                  >
                    Start now
                  </button>
                </div>
              </div>
            </section>
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div className="  mb-20 bg-white w-full   rounded-3xl -mt-10 lg:px-40 ">
            <section className="justify-center">
              {" "}
              {/* Corrected 'secction' to 'section' */}
              <div className="flex flex-col lg:flex-row md: mx-3.5    rounded-lg">
                <img
                  src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
                  alt=""
                  className="thumbnail"
                />
                <div className="lg:ml-10 w-72 mt-20  mx-5 text-center sm:w-full">
                  <h2 className="font-bold font-sans lg:text-7xl sm: text-5xl">
                    Achieve your dreams
                  </h2>
                  <p className="pt-4 text-2xl font-sans mt-8 ">
                    Access scholarships that match your education financial
                    needs and achieve your goals.
                  </p>
                  <button
                    type="button"
                    className="px-auto rounded-full  mt-28 bg-indigo-600 px-10 py-6 mb-10 text-2xl leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-7/12  sm:p-5"
                  >
                    Start now
                  </button>
                </div>
              </div>
            </section>
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div className="  mb-20 bg-white w-full   rounded-3xl -mt-10 lg:px-40 ">
            <section className="justify-center">
              {" "}
              {/* Corrected 'secction' to 'section' */}
              <div className="flex flex-col lg:flex-row md: mx-3.5    rounded-lg">
                <img
                  src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
                  alt=""
                  className="thumbnail"
                />
                <div className="lg:ml-10 w-72 mt-20  mx-5 text-center sm:w-full">
                  <h2 className="font-bold font-sans lg:text-7xl sm: text-5xl">
                    Achieve your dreams
                  </h2>
                  <p className="pt-4 text-2xl font-sans mt-8 ">
                    Access scholarships that match your education financial
                    needs and achieve your goals.
                  </p>
                  <button
                    type="button"
                    className="px-auto rounded-full  mt-28 bg-indigo-600 px-10 py-6 mb-10 text-2xl leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-7/12  sm:p-5"
                  >
                    Start now
                  </button>
                </div>
              </div>
            </section>
          </div>
        </swiper-slide>
      </swiper-container>
    </>
  );
}

export default Slider;
