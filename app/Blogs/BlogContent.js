import BlogCarousel from "./BlogCarousel";
import SideBlogsCards from "./SideBlogsCards";
import style from "./blog.css";
function BlogContent() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2">
        <div className="">
          <BlogCarousel />
        </div>
        <div className="">
          <SideBlogsCards />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default BlogContent;
