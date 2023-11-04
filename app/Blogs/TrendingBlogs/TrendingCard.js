function TrendingCard() {
  const cards = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      date: "Katy Liu on Sep 29, 2017 at 9:48 am",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      date: "Katy Liu on Sep 29, 2017 at 9:48 am",
    },
  ];

  const cardsData = [
    {
      title: "Yet another card title",
      imageSrc:
        "https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      title: "Yet another card title",
      imageSrc:
        "https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      title: "Yet another card title",
      imageSrc:
        "https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      title: "Yet another card title",
      imageSrc:
        "https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
  ];

  return (
    <>
      <div className="mx-5 my-4 md:mx-5">
        <div className="flex-col lg:flex-row md:flex-row w-full gap-x-2  flex gap-y-4">
          {cards.map((card, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg ">
              <img className="w-full" src={card.imageSrc} alt={card.title} />
              <div className="px-10 py-10">
                <div className="font-bold text-2xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">{card.description}</p>
                <p className="text-gray-700 text-base pt-8">{card.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" max-w-6xl flex flex-col flex-wrap lg:flex-row md:flex-row   mt-10  ">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`lg:w-1/2 w-full   ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div className="flex flex-row rounded overflow-hidden h-auto lg:h-28 border shadow shadow-lg">
                <img
                  className="block h-auto lg:w-48 w-32  flex-none bg-cover h-24"
                  src={card.imageSrc}
                  alt={card.title}
                />
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="text-black font-bold text-xl mb-2 leading-tight">
                    {card.title}
                  </div>
                  <p className="text-grey-darker text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingCard;
