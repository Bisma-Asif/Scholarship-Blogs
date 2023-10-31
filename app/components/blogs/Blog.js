"use client";
import BlogTabs from "./BlogTabs";
import About from "./About";
import TrendingBlogs from "./TrendingBlogs/TrendingBlogs";
import BlogAdd from "./BlogAdd";
import LatestArticles from "./LatestArticles";

function Blog() {
  return (
    <>
      <div>
        <div className="grid lg:grid-cols-3 space-x-2 sm:grid-cols-1">
          <div className="w-full col-span-2 ">
            <BlogTabs />
            <TrendingBlogs />
          </div>
          <div className="w-4/5">
            <About />
          </div>
        </div>

        <BlogAdd />
        <LatestArticles />
      </div>
    </>
  );
}

export default Blog;
