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
        <div className=" container 2xl (1536px) flex  lg:flex-nowrap sm:flex-wrap">
          <div className="w-3/5">
            <BlogTabs />
            <TrendingBlogs />
          </div>
          <div className=" w-2/4 sm:w-8/12">
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
