"use client";

const data = [
  {
    title: "Title 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80",
    date: "Katy Liu on Sep 29, 2017 at 9:48 am",
  },
  {
    title: "Title 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80",
    date: "Katy Liu on Sep 29, 2017 at 9:48 am",
  },
  {
    title: "Title 3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageSrc:
      "https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80",
    date: "Katy Liu on Sep 29, 2017 at 9:48 am",
  },
];

function BlogAdd() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:px-20 py-20  sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:w-full sm:w-9/12 sm:px-5 sm:py-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative  overflow-hidden text-center shadow-lg cursor-pointer"
            >
              <img
                className="object-cover w-full h-48"
                src={item.imageSrc}
                alt="Flower and sky"
              />
              <div className="absolute top-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h4>
                <h1 className="leading-normal text-2xl text-gray-100">
                  {item.description}
                </h1>
                <p className="leading-normal text-gray-400 pt-10 pb-4">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogAdd;
