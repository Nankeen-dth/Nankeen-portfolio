import React from "react";

const Skill = () => {
  return (
    <main className="scrollbar-hide h-screen overflow-y-scroll bg-gray-900 pt-20">
      <div className="">
        <section className=" bg-gray-900 text-gray-200">
          <div className="scrollbar-hide mx-auto max-w-6xl overflow-y-scroll px-5 py-24">
            <div className="mb-20 text-center">
              <h1 className="title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                What are my <span className="text-Harvest-Gold">skills</span>?
              </h1>
              <p className="mx-auto text-base leading-relaxed text-slate-500 lg:w-3/4 xl:w-2/4">
                Skills are the building blocks of success, the brushstrokes that
                paint our aspirations into reality. They are not just acquired;
                they're cultivated, refined, and wielded to craft masterpieces
                in every endeavor.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
              </div>
            </div>

            <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap sm:-m-4">
              {/* Webdesign */}
              <div className="mb-6 flex flex-col p-10 md:mb-0 md:w-1/3">
                <div className=" transform rounded bg-gray-800 p-4">
                  <div className="mb-5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 p-2 text-green-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Webdesign SVG */}
                      {/* Replace this with your actual webdesign icon SVG */}
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="title-font mb-3 text-xl font-medium">
                      Webdesign
                    </h2>
                    <p className="text-justify text-sm leading-relaxed text-slate-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit consequuntur cum cumque quam fugit quis, repellat quae
                      sapiente facilis. Maxime.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intégration web */}
              <div className="-mb-10 mb-6 flex flex-col p-10 md:mb-0 md:w-1/3">
                <div className="transform rounded bg-gray-800 p-4 ">
                  <div className="mb-5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Intégration web SVG */}
                      {/* Replace this with your actual integration web icon SVG */}
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="title-font mb-3 text-xl font-medium">
                      Intégration web
                    </h2>
                    <p className="text-justify text-sm leading-relaxed text-slate-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit consequuntur cum cumque quam fugit quis, repellat quae
                      sapiente facilis. Maxime.
                    </p>
                  </div>
                </div>
              </div>

              {/* Developpement Back-end */}
              <div className="mb-6 flex flex-col p-10 md:mb-0 md:w-1/3">
                <div className=" transform rounded bg-gray-800 p-4 ">
                  <div className="mb-5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Developpement Back-end SVG */}
                      {/* Replace this with your actual backend development icon SVG */}
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="title-font mb-3 text-xl font-medium">
                      Développement Back-end
                    </h2>
                    <p className="text-justify text-sm leading-relaxed text-slate-400">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit consequuntur cum cumque quam fugit quis, repellat quae
                      sapiente facilis. Maxime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Skill;
