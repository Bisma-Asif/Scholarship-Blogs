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
      img: "https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
      date: "Katy Liu on Sep 29, 2017 at 9:48 am",
    },
    {
      title: "React Tailwind Card with Grid 3",
      img: "https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
      date: "Katy Liu on Sep 29, 2017 at 9:48 am",
    },
    {
      title: "React Tailwind Card with Grid 4",
      img: "https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
      date: "Katy Liu on Sep 29, 2017 at 9:48 am",
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
      <div className="relative w-full px-5   mt-5 h-3/5 overflow-hidden after:clear-both after:block after:content-[''] md:mx-6 ">
        <Slider {...settings}>
          {posts.map((items, key) => (
            <div
              className="w-full shadow-md lg:max-w-sm  mb-5  "
              key={key}
            >
              <img
                className="object-cover w-full h-52 md:h-56 "
                src={items.img}
                alt="image"
              />
              <div>
                <h4 className="text-xl font-semibold p-5">{items.title}</h4>
                <p className="leading-normal p-5 text-base md:p-6">
                  {items.content}
                </p>
                <p className="p-5 text-gray-600 md:p-8">{items.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogCarousel;
