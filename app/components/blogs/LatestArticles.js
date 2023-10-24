const data = [
  {
    title: "The Majestic and Wonderful Bahamas",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.",
    rating: 4.96,
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
  {
    title: "The Majestic and Wonderful Bahamas",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.",
    rating: 4.96,
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
  {
    title: "The Majestic and Wonderful Bahamas",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.",

    rating: 4.96,
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
  {
    title: "The Majestic and Wonderful Bahamas",
    description:
      "The best-kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination.",
    rating: 4.96,
    reviews: 76,
    imageSrc:
      "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    superhost: true,
  },
];
function LatestArticles() {
  return (
    <>
      <div className="flex lg:flex-nowrap  mx-20 my-20 sm:flex-wrap md:mx-2 my-2">
        <div className="w-4/5 ml-10">
          <h1 className="text-3xl font-bold ">Latest Articals</h1>
          <hr />
          <div className="flex flex-col mt-10">
            <div className="max-w-4xl">
              {data.map((card, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row sm:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 border border-white bg-white my-4 sm:mx-5"
                >
                  <div className="w-full sm:w-1/3 bg-white grid place-items-center">
                    <img
                      src={card.imageSrc}
                      alt="Card"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">
                      <p className="text-gray-500 font-medium hidden md:block">
                        Vacations
                      </p>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-gray-600 font-bold text-sm ml-1">
                          {card.rating}
                          <span className="text-gray-500 font-normal">
                            ({card.reviews} reviews)
                          </span>
                        </p>
                      </div>
                      {card.superhost && (
                        <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                          Superhost
                        </div>
                      )}
                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                      {card.title}
                    </h3>
                    <p className="md:text-lg text-gray-500 text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="border-2 boarder-gray-200 rounded-3xl px-4 py-2 mr-10 mt-20 text-gray-600 lg:float-right sm:float-left sm:mb-5">
            Load More
          </button>
        </div>
        <div className="lg:w-2/4 sm:w-9/12 ">
          <h1 className="text-3xl font-bold pl-10">Most Popular Videos</h1>
          <hr />
          <div className=" border-gray-200 border-2 rounded-lg mx-10 mt-10 shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
              alt=""
              className="thumbnail  w-full  "
            />
            <h1 className="px-10 pt-5 text-2xl font-bold ">
              react tailwind css card with image It is a long established fact
              that a reader will be distracted.
            </h1>
            <p className="px-8 py-5 text-xl">
              react tailwind css card with image It is a long established fact
              that a reader will be distracted.
            </p>
            <p className="px-8 py-5 text-xl">
              Katy Liu on Sep 29, 2017 at 9:48 am
            </p>
          </div>
          <div className=" border-gray-200 border-2 rounded-lg shadow-lg mx-10 mt-3">
            <img
              src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
              alt=""
              className="thumbnail  w-full  "
            />
            <h1 className="px-10 pt-5 text-2xl font-bold ">
              react tailwind css card with image It is a long established fact
              that a reader will be distracted.
            </h1>
            <p className="px-8 py-5 text-xl">
              react tailwind css card with image It is a long established fact
              that a reader will be distracted.
            </p>
            <p className="px-8 py-5 text-xl">
              Katy Liu on Sep 29, 2017 at 9:48 am
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestArticles;
