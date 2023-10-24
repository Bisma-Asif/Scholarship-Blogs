"use client";
import { useState } from "react";
import BlogContent from "./BlogContent";

const tabsData = [
  {
    label: "All",
    content: <BlogContent />,
  },
  {
    label: "Argriculture",
    content: <BlogContent />,
  },
  {
    label: "Mathematics",
    content: <BlogContent />,
  },
  {
    label: "Computer",
    content: <BlogContent />,
  },
  {
    label: "Business",
    content: <BlogContent />,
  },

  {
    label: "Engineering ",
    content: <BlogContent />,
  },
  {
    label: "More",
    content: <BlogContent />,
  },
];

function BlogTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="">
      <div className="flex lg:ml-20 mt-20 lg:space-x-5 border-b  lg:text-base sm:text-xs sm:space-x-2 sm:mt-5 mx-5 ">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? "border-teal-500"
                  : "border-transparent hover:border-gray-200"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="text-gray-700 md:items-center">
        {tabsData[activeTabIndex].content}
      </div>
    </div>
  );
}

export default BlogTabs;
