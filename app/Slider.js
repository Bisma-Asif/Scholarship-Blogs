"use client";
import React from "react";
import SwiperCore, { Autoplay } from "swiper/core";
// import "swiper/css"; // Import the Swiper CSS
// import { Swiper, SwiperSlide } from "swiper/react";
//
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

SwiperCore.use([Autoplay]);

function Slider({ showModal, showSignInModal }) {
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
      <swiper-container
        ref={swiperRef}
        init="false"
        className="relative"
        style={{ zIndex: (showModal || showSignInModal) && "-1" }}
      >
        <swiper-slide class="relative">
          <div className="  mb-20 lg:px-40 ">
            <section className="justify-center">
              {" "}
              {/* Corrected 'secction' to 'section' */}
              <div className="grid  gap-y-4 lg:grid-cols-2  justify-center sm:grid-cols-1 sm:gap-x-1">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 pr-20">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                    alt="Side of walnut card tray with card groove and recessed card area."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                {/* <img
                  src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
                  alt=""
                  className="thumbnail w-full rounded-2xl sm:px-5 "
                /> */}
                <div className="lg:w-9/12  pt-40 text-center sm:px-2">
                  <h2 className="font-sans text-gray-700 lg:text-6xl md:text-3xl  ">
                    Find scholarships
                  </h2>
                  <p className="pt-4   font-sans mt-5 lg:text-2xl px-20 ">
                    Find and compare University Scholarships Worldwide. Get a
                    collections of suitable scholarships from our expansive
                    scholarship database.
                  </p>
                  <button
                    type="button"
                    className="px-auto rounded-full mt-10 bg-indigo-600  mb-10 text-2xl leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  lg:text-2xl sm:text-xl  pl-4 pr-4 pt-4 pb-4"
                  >
                    Find scholarships
                  </button>
                </div>
              </div>
            </section>
          </div>
        </swiper-slide>
        <swiper-slide class="relative z-0">
          <div className="  mb-20 lg:px-40 ">
            <section className="justify-center">
              {" "}
              {/* Corrected 'secction' to 'section' */}
              <div className="grid  gap-y-4 lg:grid-cols-2 justify-center sm:grid-cols-1 sm:gap-x-1">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 pr-20">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                    alt="Side of walnut card tray with card groove and recessed card area."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                {/* <img
                  src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
                  alt=""
                  className="thumbnail rounded-3xl w-full sm:px-5 "
                /> */}
                <div className="lg:w-9/12  pt-40 text-center  sm:px-2">
                  <h2 className="font-sans text-gray-700 lg:text-6xl  ">
                    Find scholarships
                  </h2>
                  <p className="pt-4   font-sans mt-5 lg:text-2xl px-20 ">
                    Find and compare University Scholarships Worldwide. Get a
                    collections of suitable scholarships from our expansive
                    scholarship database.
                  </p>
                  <button
                    type="button"
                    className="px-auto rounded-full mt-10 bg-indigo-600  mb-10 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  lg:text-2xl sm:text-xl  pl-4 pr-4 pt-4 pb-4"
                  >
                    Find scholarships
                  </button>
                </div>
              </div>
            </section>
          </div>
        </swiper-slide>
        <swiper-slide class="relative z-0">
          <div className="  mb-20 lg:px-40 ">
            <section className="justify-center">
              {" "}
              {/* Corrected 'secction' to 'section' */}
              <div className="grid  gap-y-4 lg:grid-cols-2  justify-center sm:grid-cols-1 sm:gap-x-1">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 pr-20">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                    alt="Side of walnut card tray with card groove and recessed card area."
                    className="rounded-lg bg-gray-100"
                  />
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                    className="rounded-lg bg-gray-100"
                  />
                </div>
                {/* <img
                  src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
                  alt=""
                  className="thumbnail rounded-3xl w-full sm:px-5 "
                /> */}
                <div className="lg:w-9/12  pt-40 text-center  sm:px-2">
                  <h2 className="font-sans text-gray-700 lg:text-6xl  ">
                    Find scholarships
                  </h2>
                  <p className="pt-4   font-sans mt-5 lg:text-2xl px-20 ">
                    Find and compare University Scholarships Worldwide. Get a
                    collections of suitable scholarships from our expansive
                    scholarship database.
                  </p>
                  <button
                    type="button"
                    className="lg:px-auto rounded-full mt-10 bg-indigo-600  mb-10  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:text-2xl sm:text-xl  pl-4 pr-4 pt-4 pb-4"
                  >
                    Find scholarships
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
