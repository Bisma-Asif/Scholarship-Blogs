"use client";
import React, { Fragment, useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import PopupFilter from "./filter/PopupFilter";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const data = [
  {
    title: "Scholarsip of Bachelor Program in Mathematics",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.The Best Scholarsip of Bachelor Program in Mathematics at Uk ",
    rating: 3.96,
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
  {
    title: "Scholarship of Masters Program in Computer Science",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.The best Scholarsip of Masters Program in computer science",
    rating: 4.96,
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
  {
    title: "Scholarsip of Bachelor Program in Medical Science",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.The best Scholarsip of Bachelor Program in Medical at different Countries",

    rating: 4.75,
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
  {
    title: "Scholarsip of Bachelor Program in Business",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.The Best Scholarsip of Bachelor Program in Business",
    rating: 3.86,
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [showSignInModal, setSignInShowModal] = useState(false);

  const SignInOnClose = () => setSignInShowModal(false);

  const [showPopupModal, setPopupShowModal] = useState(false);

  const PopupOnClose = () => setPopupShowModal(false);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);

  const handleFilter = (selectedCategory) => {
    const filteredItems = data.filter((item) => {
      // Modify the following condition according to your data structure
      return item.category === selectedCategory;
    });

    setSelectedFilters([selectedCategory]);
    setFilteredData(filteredItems);
  };

  return (
    <div className="bg-white  lg:px-20">
      <div>
        <main className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <form className="justify-center lg:ml-80 md:ml-10">
            <label
              htmlFor="default-search"
              className="mb-2 text-xl font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-3/5 p-4 pl-10 mt-10 text-sm justify-center text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Blogs..."
                required
              />
              {/* <button
                type="submit"
                className="text-white absolute -right-1.5 mr-40 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
            </div>
          </form>
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Blogs
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex mr-5 justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                  <button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Filter
                    <FunnelIcon
                      onClick={() => setPopupShowModal(true)}
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </button>
                  <PopupFilter
                    onClose={() => setPopupShowModal(false)}
                    visible={showPopupModal}
                    selectedFilters={selectedFilters}
                    handleFilter={handleFilter} // Pass the handleFilter function
                  />
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="">
              {/* Filters */}

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Your content */}
                <div className="flex flex-col  mt-20 relative bg-white ">
                  <div className="max-w-8xl ">
                    {data.map((card, index) => (
                      <div
                        key={index}
                        className=" flex flex-col  mb-40 md:flex-row sm:space-x-5 space-y-5 md:space-y-0 rounded-xl shadow-lg p-3 border border-grey-100 bg-grey my-4 sm:mx-5"
                      >
                        <div className=" w-52 rounded-xl sm:w-1/3 bg-white grid place-items-center">
                          <img
                            src={card.imageSrc}
                            alt="Card"
                            className="rounded-xl w-80 py-10  lg:-ml-56 "
                          />
                        </div>
                        <div className="w-full  md:w-2/3 bg-grey-200 flex flex-col space-y-2 p-3 pr-10">
                          <div className="flex lg:my-10 justify-between item-center">
                            <p className="text-gray-500 font-medium hidden md:block text-xl">
                              Vacations
                            </p>
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <p className="text-gray-600 font-bold text-xl ml-1">
                                {card.rating}
                                <span className="text-gray-500 font-normal">
                                  ({card.reviews} reviews)
                                </span>
                              </p>
                            </div>
                            {card.superhost && (
                              <div className="bg-gray-200 px-3 py-1 rounded-full text-lg font-medium text-gray-800 hidden md:block">
                                Superhost
                              </div>
                            )}
                          </div>
                          <h3 className="font-black text-gray-800 md:text-4xl text-xl">
                            {card.title}
                          </h3>
                          <p className=" text-gray-500 lg:text-2xl md:text-lg">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="border-2 boarder-gray-200 rounded-3xl px-4 py-2 ml-50 mt-20 text-gray-600 justify-center sm:mb-5">
                  Load More
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
