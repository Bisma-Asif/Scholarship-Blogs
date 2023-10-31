import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BlogCarousel() {
  const posts = [
    {
      title: "React Tailwind Card with Grid 1",
      img: "https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
      date: "Katy Liu on Sep 29, 2017 at 9:48 am",
    },
    {
      title: "React Tailwind Card with Grid 2",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
      date: "John Doe on Jan 15, 2023 at 2:30 pm",
    },
    {
      title: "React Tailwind Card with Grid 3",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
      date: "Jane Smith on March 5, 2023 at 11:15 am",
    },
    {
      title: "React Tailwind Card with Grid 4",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
      date: "Mike Johnson on July 12, 2023 at 4:45 pm",
    },
    // Add more posts here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // You can adjust this value to control the number of cards shown at once
    slidesToScroll: 1,
  };

  return (
    <div
      id="carouselExampleSlidesOnly"
      data-te-carousel-init=""
      data-te-ride="carousel"
    >
      <div className="relative w-full lg:ml-20 mt-5 h-3/5 overflow-hidden after:clear-both after:block after:content-[''] md:mx-6 ">
        <Slider {...settings}>
          {posts.map((items, key) => (
            <div className="w-full shadow-md lg:max-w-sm mb-5  " key={key}>
              <img
                className="object-cover w-full h-52"
                src={items.img}
                alt="image"
              />
              <div>
                <h4 className="text-xl font-semibold p-5">{items.title}</h4>
                <p className="leading-normal p-5 text-base">{items.content}</p>
                <p className="p-5 text-gray-600">{items.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogCarousel;
