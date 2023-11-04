"use client";
import { useState } from "react";
import TrendingCard from "./TrendingCard";

const tabsData = [
  {
    label: "All",
    content: <TrendingCard />,
  },
  {
    label: "Argriculture",
    content: <TrendingCard />,
  },
  {
    label: "Mathematics",
    content: <TrendingCard />,
  },
  {
    label: "Computer",
    content: <TrendingCard />,
  },
  {
    label: "Business",
    content: <TrendingCard />,
  },

  {
    label: "More",
    content: <TrendingCard />,
  },
];

function BlogTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="">
      <div className="flex text-xs space-x-2 ml-2 mt-20 lg:space-x-5 md:space-x-4 border-b  lg:text-base md:text-2xl md:mx-10">
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
      <div className="text-gray-700 ">{tabsData[activeTabIndex].content}</div>
    </div>
  );
}

export default BlogTabs;
