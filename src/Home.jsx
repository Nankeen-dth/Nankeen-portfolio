import React from "react";
import TypingAnimation from "./TypingAnimation";

const Home = () => {
  return (
    <main className="h-screen w-full overflow-hidden">
      <div className="lg-pt-20 mx-auto flex h-screen max-w-screen-xl flex-col items-center justify-between bg-gray-900 pt-36 lg:top-56 lg:mt-28 lg:flex-row lg:items-start">
        <header className="h-56 p-7">
          <h4 className="text-1xl text-slate-400  md:text-3xl lg:text-4xl">
            HELLO <span className="font-semibold text-Harvest-Gold">I AM</span>
          </h4>
          <h1 className="text-4xl font-bold uppercase text-White md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TypingAnimation />
          </h1>
          <p className="text-1xl text-slate-400  md:text-3xl lg:text-4xl">
            AN <span className="text-Harvest-Gold">ASPIRING</span> FRONT-END
            DEVELOPER
          </p>
          <button
            type="button"
            class="mb-2 me-2 mt-6 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
          >
            Download CV RESUME
          </button>
        </header>
        <div>
          <img
            src="/nankeen/SVG/hero.svg"
            alt="logo"
            className=" xl:dvw right-12 w-96 sm:w-96 md:w-dvw lg:-mt-32 lg:w-dvw"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
