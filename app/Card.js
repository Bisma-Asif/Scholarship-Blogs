import Slider from "./Slider";
function Card() {
  return (
    <>
      {/* <div className="  mb-20 bg-white w-full   rounded-3xl -mt-10 lg:px-40 ">
        <secction className="justify-center">
          <div className="flex flex-col lg:flex-row md: mx-3.5    rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
              alt=""
              className="thumbnail"
            />
            <div className="lg:ml-10 w-72 mt-20  mx-5 text-center sm:w-full">
              <h2 className="font-bold font-sans lg:text-7xl sm: text-5xl">
                Achieve your dreams
              </h2>
              <p className="pt-4 text-2xl font-sans mt-8 ">
                Access scholarships that match your education financial needs
                and achieve your goals.
              </p>
              <button
                type="button"
                className="px-auto rounded-full  mt-28 bg-indigo-600 px-10 py-6 mb-10 text-2xl leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-7/12  sm:p-5"
              >
                Start now
              </button>
            </div>
          </div>
        </secction>
      </div> */}
      <Slider />

      {/* Card 2 start */}
      <div className="  mb-20 lg:px-40 ">
        <section className="justify-center">
          {" "}
          {/* Corrected 'secction' to 'section' */}
          <div className="grid  gap-y-4 lg:grid-cols-2 lg:gap-x-2.5 justify-center sm:grid-cols-1 sm:gap-x-1">
            <div className="lg:w-9/12  pt-10 text-center  sm:px-2">
              <h2 className="font-sans text-gray-700 lg:text-6xl md:text-3xl  ">
                Find scholarships
              </h2>
              <p className="pt-4   font-sans mt-5 lg:text-2xl px-20 ">
                Find and compare University Scholarships Worldwide. Get a
                collections of suitable scholarships from our expansive
                scholarship database.
              </p>
              <button
                type="button"
                className="px-auto rounded-full mt-10 bg-indigo-600  mb-10 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  lg:text-2xl sm:text-xl  pl-4 pr-4 pt-4 pb-4"
              >
                Find scholarships
              </button>
            </div>
            <img
              src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
              alt=""
              className="thumbnail rounded-3xl w-full sm:px-5 "
            />
          </div>
        </section>
      </div>
      {/* <div className="  mb-20 bg-white w-full rounded-3xl -mt-10 lg:px-40">
        <secction className="justify-center">
          <div className="flex flex-col lg:flex-row md:mx-3.5 rounded-lg">
            <div className="lg:ml-10 w-72 sm:w-full  mt-5 text-center ">
              <h2 className="font-bold font-sans text-7xl ">
                Achieve your dreams
              </h2>
              <p className="pt-4 text-2xl font-sans mt-8 ">
                Access scholarships that match your education financial needs
                and achieve your goals.
              </p>
              <button
                type="button"
                className="px-auto rounded-full  mt-28 bg-indigo-600 px-10 py-6 mb-10 text-2xl leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-7/12  sm:p-5"
              >
                Start now
              </button>
            </div>
            <img
              src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
              alt=""
              className="thumbnail"
          
          Card 3 start */}

      <div className="  mb-20 lg:px-40 ">
        <section className="justify-center">
          {" "}
          {/* Corrected 'secction' to 'section' */}
          <div className="grid  gap-y-4 lg:grid-cols-2 lg:gap-x-2.5 justify-center sm:grid-cols-1 sm:gap-x-1">
            <img
              src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
              alt=""
              className="thumbnail rounded-3xl w-full sm:px-5 "
            />
            <div className="lg:w-9/12  pt-10 text-center  sm:px-2">
              <h2 className="font-sans text-gray-700 lg:text-6xl md:text-3xl  ">
                Find scholarships
              </h2>
              <p className="pt-4   font-sans mt-5 lg:text-2xl px-20 ">
                Find and compare University Scholarships Worldwide. Get a
                collections of suitable scholarships from our expansive
                scholarship database.
              </p>
              <button
                type="button"
                className="px-auto rounded-full mt-10 bg-indigo-600  mb-10 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:text-2xl sm:text-xl  pl-4 pr-4 pt-4 pb-4"
              >
                Find scholarships
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Card;
