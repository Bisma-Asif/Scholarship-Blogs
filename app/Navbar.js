"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Blogs", href: "/Blogs", current: false },
  { name: "Scholarship", href: "/Scholarship", current: false },
  { name: "Contact", href: "#", current: false },
];
const handleLinkClick = (name, href) => {
  if (name === "Blogs") {
    
    router.push("/Blogs");
  } else if (name === "Home") {
   
    router.push("/");
  } else if (name === "Scholarship") {
    
    router.push("/Scholarship");
  } else {
    
    router.push(href);
  }
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  const [showSignInModal, setSignInShowModal] = useState(false);

  const SignInOnClose = () => setSignInShowModal(false);
  return (
    <>
      <Disclosure as="nav" className="bg-none">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 bg-gray-900">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-6 ">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={
                            () => handleLinkClick(item.name, item.href)}
                            // item.name === "Blogs"
                            //   ? () => router.push("/Blogs")
                            //   : undefined
                          
                          className={classNames(
                            item.current ? "text-white" : "text-white",
                            "rounded-md px-3 py-2 text-lg font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSignInShowModal(true)}
                    type="button"
                    className="flex rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                  <SignIn onClose={SignInOnClose} visible={showSignInModal} />
                  <button
                    onClick={() => setShowModal(true)}
                    type="button"
                    className="flex rounded-md bg-indigo-600 px-3 py-1 pr-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                  <SignUp onClose={handleOnClose} visible={showModal} />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Navbar;
