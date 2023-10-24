import AboutCard from "./AboutCard";

function About() {
  return (
    <>
      <div>
        <div className="mt-10 boarder-l-2 lg:ml-20 sm:mx-8">
          <h1 className="text-3xl font-bold px-20">About World</h1>
          <hr />
          <div className="px-10">
            <p className="py-10">
              react tailwind css card with image It is a long established fact
              that a reader will be distracted by the readable content react
              tailwind css card with image It is a long established fact that a
              reader will be distracted by the readable content react tailwind
              css card with image It is a long established fact that a reader
              will be distracted by the readable content
            </p>
          </div>
          <hr />
          <div className="">
            <h1 className="text-2xl font-bold px-20 py-2">Top Stories</h1>
            <hr />
            <AboutCard />
          </div>
          <hr />
          <h1 className="text-3xl font-bold px-20 py-5">Stay Connected</h1>
          <hr />
          <div>
            <ul className="flex justify-between px-10 py-10">
              <li>
                <svg
                  viewBox="0 0 500 1000"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M500 206H358c-9.333 0-17.667 5-25 15-7.333 10-11 22.333-11 37v102h178v148H322v442H152V508H0V360h152v-86c0-62.667 19.667-115.667 59-159s88.333-65 147-65h142v156" />
                </svg>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M8.49 19.191c.024-.336.072-.671.144-1.001.063-.295.254-1.13.534-2.34l.007-.03.387-1.668c.079-.34.14-.604.181-.692a3.46 3.46 0 01-.284-1.423c0-1.337.756-2.373 1.736-2.373.36-.006.704.15.942.426.238.275.348.644.302.996 0 .453-.085.798-.453 2.035-.071.238-.12.404-.166.571-.051.188-.095.358-.132.522-.096.386-.008.797.237 1.106a1.2 1.2 0 001.006.456c1.492 0 2.6-1.985 2.6-4.548 0-1.97-1.29-3.274-3.432-3.274A3.878 3.878 0 009.2 9.1a4.13 4.13 0 00-1.195 2.961 2.553 2.553 0 00.512 1.644c.181.14.25.383.175.59-.041.168-.14.552-.176.68a.41.41 0 01-.216.297.388.388 0 01-.355.002c-1.16-.479-1.796-1.778-1.796-3.44 0-2.985 2.491-5.584 6.192-5.584 3.135 0 5.481 2.329 5.481 5.14 0 3.532-1.932 6.104-4.69 6.104a2.508 2.508 0 01-2.046-.959l-.043.177-.207.852-.002.007c-.146.6-.248 1.017-.288 1.174-.106.355-.24.703-.4 1.04a8 8 0 10-1.656-.593zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </li>
              <li>
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M22 7.42c-.09 1.95-1.45 4.62-4.08 8.02C15.2 19 12.9 20.75 11 20.75c-1.15 0-2.14-1.08-2.95-3.25-.55-1.96-1.05-3.94-1.61-5.92-.6-2.16-1.24-3.24-1.94-3.24-.14 0-.66.32-1.56.95L2 8.07c1-.87 1.96-1.74 2.92-2.61 1.32-1.14 2.31-1.74 2.96-1.8 1.56-.16 2.52.92 2.88 3.2.39 2.47.66 4 .81 4.6.43 2.04.93 3.04 1.48 3.04.42 0 1.05-.64 1.89-1.97.84-1.32 1.29-2.33 1.35-3.03.12-1.14-.33-1.71-1.35-1.71-.48 0-.97.11-1.48.33.98-3.23 2.86-4.8 5.63-4.71 2.06.06 3.03 1.4 2.91 4.01z" />
                </svg>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
                </svg>
              </li>
              <li>
                <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
                  <path
                    fill="currentColor"
                    d="M6 12a6 6 0 0011.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 018.282 4.393l-3.278 2.295A6 6 0 006 12z"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <hr />
          <h1 className="text-3xl font-bold px-20 py-5">Today's Pick</h1>
          <hr />
          <div className="px-10 py-10">
            <img
              src="https://img.freepik.com/free-photo/young-students-learning-together-during-group-study_23-2149211066.jpg"
              alt=""
              className="thumbnail  w-full sm:px-5 "
            />
            <h1 className="px-10 py-10 text-2xl font-bold ">
              react tailwind css card with image It is a long established fact
              that a reader will be distracted .
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
