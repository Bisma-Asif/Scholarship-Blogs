import BlogCarousel from "./BlogCarousel";
import SideBlogsCards from "./SideBlogsCards";
function BlogContent() {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="lg:w-96 mr-10 sm:w-full">
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
