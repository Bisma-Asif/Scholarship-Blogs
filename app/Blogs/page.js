"use client";
import BlogTabs from "./BlogTabs";
import About from "./About";
import TrendingBlogs from "./TrendingBlogs/TrendingBlogs";
import BlogAdd from "./BlogAdd";
import LatestArticles from "./LatestArticles";
import style from "./blog.css";

function Blogs() {
  return (
    <>
      <div>
        <div className="m-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 lg:mx-20 ">
          <div className="lg:mr-40 lg:col-span-2 ">
            <BlogTabs />
            <TrendingBlogs />
          </div>
          <div className="md:mx-20 lg:mx-4 ">
            <About />
          </div>
        </div>

        <BlogAdd />
        <LatestArticles />
      </div>
    </>
  );
}

export default Blogs;
