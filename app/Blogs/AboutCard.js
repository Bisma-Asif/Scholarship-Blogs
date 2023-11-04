function SideBlogsCards() {
  const cardsData = [
    {
      title: "Can life make you a bitter developer?",
      imageSrc: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    },
    {
      title: "Can coffee make you a bitter developer?",
      imageSrc: "https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg",
    },
    {
      title: "Another card title",
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
      <div className="flex-row ">
        {cardsData.map((card, index) => (
          <div className="w-full " key={index}>
            <div className="flex flex-row rounded overflow-hidden h-24 lg:h-28  border shadow shadow-lg">
              <img
                className="block h-auto lg:w-44 w-28 flex-none bg-cover"
                src={card.imageSrc}
                alt={card.title}
              />
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="text-black font-bold text-lg mb-2 leading-tight">
                  {card.title}
                </div>
                <p className="text-grey-darker text-base">Read more</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SideBlogsCards;
