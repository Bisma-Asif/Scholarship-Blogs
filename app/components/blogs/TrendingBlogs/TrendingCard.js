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
      imageSrc: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
      title: "Can life make you a bitter developer?",
      description: "Read more",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Can coffee make you a bitter developer?",
      description: "Read more",
    },
    {
      imageSrc: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
      title: "Can coffee make you a bitter developer?",
      description: "Read more",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Can coffee make you a bitter developer?",
      description: "Read more",
    },
  ];

  return (
    <>
      <div>
        <div className="p-10 lg:w-full gap-x-2  lg:ml-20 flex  lg:flex-nowrap sm:flex-wrap sm:ml-5 sm:gap-y-2 sm:w-10/12">
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
        <div className="container max-w-5xl flex flex-wrap flex-col lg:ml-20 md:flex-row sm:mx-5 sm:w-10/12 ">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`w-full lg:w-1/2 p-3 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
                <img
                  className="block h-auto w-full lg:w-48 flex-none bg-cover h-24"
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
