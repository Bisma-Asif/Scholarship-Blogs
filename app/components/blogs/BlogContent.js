import BlogCarousel from "./BlogCarousel";
import SideBlogsCards from "./SideBlogsCards";
function BlogContent() {
  return (
    <>
      <div className="flex lg:flex-nowrap md:flex-wrap">
        <div className="w-2/4 ">
          <BlogCarousel />
        </div>
        <div className="w-4/5">
          <SideBlogsCards />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default BlogContent;
