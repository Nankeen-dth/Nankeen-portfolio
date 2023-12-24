import React from "react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

const About = () => {
  return (
    <main className="mx-auto flex  h-screen max-w-screen-xl flex-col flex-wrap justify-between p-4 pt-36">
      <header>
        <h1 className="title-font  text-White mb-4 text-center text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
          So who <span className="text-Harvest-Gold pl-2"> AM I?</span>
        </h1>
        <p className="text-1xl mx-auto flex  h-auto max-w-screen-xl flex-wrap  justify-center text-center text-slate-400 sm:text-2xl">
          <span className="text-Harvest-Gold pr-1 font-bold">Coding</span> isn't
          just my skill it's my{" "}
          <span className="text-Harvest-Gold ml-1">canvas for creativity.</span>
        </p>
      </header>
      <section className="h-4/5 w-full pt-20">
        <div className="h-96 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                What Drives Me:
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Ever since my first HTML line brought a webpage to life, I've
                been captivated. Front-end development blends aesthetics with
                functionality, ensuring every user journey is delightful.
              </p>
            </Card>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Embracing Innovation:
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Thriving in web tech evolution, I've mastered HTML, CSS,
                JavaScript, and explored React and Tailwind. I'm always learning
                to stay at the forefront.
              </p>
            </Card>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Design Philosophy:
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Beyond code, I prioritize intuitive, accessible, visually
                compelling interfaces. Understanding users guides my design
                approach.
              </p>
            </Card>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Beyond the Screen:
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                When not coding, I enjoy watching tutorials and Documentation of
                different Libraries and Frameworks, fostering a diverse
                perspective influencing my development work.
              </p>
            </Card>
            <Card href="#" className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Future Goals:
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                I aim to become a professional Front-end Developer,
                collaborating on innovative web solutions and contributing to
                user-centric design evolution.
              </p>
            </Card>
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default About;
