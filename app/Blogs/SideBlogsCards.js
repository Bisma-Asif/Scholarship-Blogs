function SideBlogsCards() {
  const cardsData = [
    {
      title: "Another card title",
      imageSrc:
        "https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      title: "Another card title",
      imageSrc:
        "https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
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
      <div className="flex-row mx-5 lg:w-full   mt-6">
        {cardsData.map((card, index) => (
          <div className="" key={index}>
            <div className="flex flex-row rounded overflow-hidden h-auto lg:h-32 md:h-32  border shadow shadow-lg">
              <img
                className="block h-auto w-20  lg:w-44 md:w-24  flex-none bg-cover"
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
