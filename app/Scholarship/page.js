"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import classnames from "classnames";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  ChevronUpIcon,
  ss,
} from "@heroicons/react/20/solid";
import Slider from "react-slider";

import { useLocation } from "next/navigation";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "Location",
    name: "Location",
    options: [
      { value: "United Kingdom", label: "United Kingdom", checked: false },
      { value: "United States", label: "United States", checked: false },
      { value: "Australia", label: "Australia", checked: true },
      { value: "Germany", label: "Germany", checked: false },
      { value: "Canada", label: "Canada", checked: false },
      { value: "France", label: "France", checked: false },
    ],
  },
  {
    id: "Duration",
    name: "Duration",
    options: [
      { value: "Less than 1 year", label: "Less than 1 year", checked: false },
      { value: "1 year", label: "1 year", checked: false },
      { value: "1½ years", label: "1½ years", checked: true },
      { value: "2 years", label: "Organization", checked: false },
      {
        value: "More than 2 years",
        label: "More than 2 years",
        checked: false,
      },
    ],
  },
  {
    id: "Format",
    name: "Format",
    options: [
      { value: "Part Time", label: "Part Time", checked: false },
      { value: "Full Time", label: "Full Time", checked: false },
    ],
  },
  {
    id: "Study Mode",
    name: "study Mode",
    options: [
      {
        value: "On Campus Learning",
        label: "On Campus Learning",
        checked: false,
      },
      { value: "Online Learning", label: "Online Learning", checked: false },
      { value: "Blended Learning", label: "Blended Learning", checked: false },
    ],
  },
  {
    id: "Languages",
    name: "Languages",
    options: [
      { value: "English", label: "English", checked: false },
      { value: "Chinese", label: "chinese", checked: false },
    ],
  },
];

const categories = [
  {
    id: "Discipline",
    name: "Discipline",
  },
];
const subCategories = [
  {
    id: "Agriculture Forestry",
    name: "Agriculture Forestry",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Applied Sciences & Professions",
    name: "Applied Sciences & Professions",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Arts, Design & Architecture",
    name: "Arts, Design & Architecture",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Business & Management",
    name: "Business & Management",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Computer Science & IT",
    name: "Computer Science & IT",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Engineering & Technology",
    name: "Engineering & Technology",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Environmental Studies & Earth Sciences",
    name: "Environmental Studies & Earth Sciences",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Hospitality, Leisure & Sports",
    name: "Hospitality, Leisure & Sports",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Humanities",
    name: "Humanities",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Journalism & Media",
    name: "Journalism & Media",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Law",
    name: "Law",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Medicine & Health",
    name: "Medicine & Health",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Natural Sciences & Mathematics",
    name: "Natural Sciences & Mathematics",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
  {
    id: "Social Sciences",
    name: "Social Science",
    options: [
      {
        value: "Agriculture",
        label: "Agriculture",
      },
      { value: "Animal Science", label: "Animal Science" },
      { value: "Food Technology", label: "Food Technology" },
      { value: "Forestry", label: "Forestry" },
      {
        value: "Horticulture and Crop Science",
        label: "Horticulture and Crop Science",
      },
      { value: "Marine Science", label: "Marine Science" },
    ],
  },
];
const Carddata = [
  {
    title: "Scholarsip of Bachelor Program in Mathematics",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.The Best Scholarsip of Bachelor Program in Mathematics at Uk ",
    rating: 3.96,
    category: "Bachelor",
    subject: "Mathematics",
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
    category: "Master",
    subject: "Computer Science",
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
  {
    title: "Scholarsip of Bachelor Program in Medical Science",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.The best Scholarsip of Bachelor Program in Medical at different Countries",
    category: "Bachelor",
    subject: "Medical Science",
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
    category: "Bachelor Business",
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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [query, setQuery] = useState("");
  // const filteredData = Carddata.filter((item) => {
  //   if (selectedCategories.length === 0) {
  //     return true; // No category filter selected, so include all items
  //   }
  //   return selectedCategories.includes(item.category);
  // });
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
  }, [location.search]);
  const [leftValue, setLeftValue] = useState(100);
  const [rightValue, setRightValue] = useState(250);

  const setLeftSliderValue = (value) => {
    setLeftValue(value);
  };

  const setRightSliderValue = (value) => {
    setRightValue(value);
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    {categories.map((section) => (
                      <Disclosure as="div" key={section.id}>
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Blogs
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
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
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                {categories.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {subCategories.map((section) => (
                              <Disclosure as="div" key={section.id}>
                                {({ open }) => (
                                  <>
                                    <h3 className="-mx-2 -my-3 flow-root ">
                                      <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                        <span className="overflow-hidden text-sm text-gray-900">
                                          {section.name}
                                        </span>
                                        <span className="ml-6 flex items-center">
                                          {open ? (
                                            <ChevronUpIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <ChevronDownIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          )}
                                        </span>
                                      </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel className="pt-6">
                                      <div className="space-y-6 ">
                                        {section.options.map(
                                          (option, optionIdx) => (
                                            <div
                                              key={option.value}
                                              className="flex items-center "
                                            >
                                              <label
                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                className="ml-3 text-base min-w-0 flex-1 text-gray-500"
                                              >
                                                {option.label}
                                              </label>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="lg:col-span-3">
                  <div className="flex flex-col  relative bg-white ">
                    <div className="max-w-5xl ml-5">
                      {filteredData.map((card, index) => (
                        <div
                          key={index}
                          className=" flex flex-col   md:flex-row sm:space-x-5 space-y-5 md:space-y-0 rounded-xl shadow-lg p-3 border border-grey-100 bg-grey my-4 sm:mx-5"
                        >
                          <div className=" w-52 rounded-xl sm:w-1/3 bg-white grid place-items-center">
                            <img
                              src={card.imageSrc}
                              alt="Card"
                              className="rounded-xl w-80   lg:-ml-32 "
                            />
                          </div>
                          <div className="w-full  md:w-2/3 bg-grey-200 flex flex-col space-y-2 p-3 pr-10">
                            <div className="flex lg:my-10 justify-between item-center ">
                              <p className="text-gray-500 font-medium hidden md:block text-xl">
                                {card.category}
                              </p>
                              <div className="flex ">
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
                            <h3 className="font-black text-gray-800 md:text-3xl ">
                              {card.title}
                            </h3>
                            <p className="text-gray-500 lg:text-xl md:text-lg">
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
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
