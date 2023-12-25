import React from "react";
import { Carousel, Footer } from "flowbite-react";
import { Card } from "flowbite-react";

const Contact = () => {
  return (
    <main className="scrollbar-hide h-screen overflow-y-scroll bg-gray-900 pt-20">
      <div className="flex w-full flex-col">
        <section className=" bg-gray-900 text-gray-200">
          <div className="scrollbar-hide mx-auto max-w-6xl overflow-y-scroll px-5 py-24">
            <div className="mb-1 text-center">
              <h1 className="title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                <span className="underline underline-offset-8">Welcome!</span>{" "}
                Let's Build Something Beautiful
                <span className="text-Harvest-Gold"> Together</span>
              </h1>
              <p className="mx-auto text-base leading-relaxed text-slate-500 lg:w-3/4 xl:w-2/4">
                An enthusiastic Front-end developer with a hunger to create
                captivating and practical websites. While I may be a fresh
                graduate, my passion for design and dedication to learning is
                boundless. I'm committed to mastering the art of crafting
                unique, user-centered designs that make an impact.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
              </div>
            </div>
          </div>
        </section>
        <section className=" -mb-20 -mt-20 bg-gray-900 text-gray-200">
          <div className="scrollbar-hide mx-auto -mb-20 max-w-6xl overflow-y-scroll rounded-t-lg bg-Harvest-Gold pt-12">
            <div className="mb-20 text-center">
              <h1 className="  mb-4 text-2xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none md:text-4xl">
                What I Bring to the Table
              </h1>
              <div className=" flex justify-center">
                <div className="inline-flex h-1 w-16 rounded-full bg-gray-900"></div>
              </div>
            </div>
          </div>
          <div className=" -mt-10 flex h-96 items-start justify-center bg-Harvest-Gold sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000} className="max-w-xl">
              <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Eagerness to Learn:
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Constantly exploring new design trends and techniques to
                  create fresh and innovative web solutions.
                </p>
              </Card>
              <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Creative Drive:
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Fueled by a passion for design, I'm dedicated to crafting
                  visually appealing websites that engage users.
                </p>
              </Card>
              <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Adaptability:
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Ready to embrace challenges and collaborate to transform ideas
                  into compelling online experiences.
                </p>
              </Card>
            </Carousel>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
