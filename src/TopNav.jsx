import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="fixed start-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          href="https://web.facebook.com/Mildred.io"
          target="_blank"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <a href="https://web.facebook.com/Mildred.io" target="_blank">
            <img
              src="../public/nankeen/SVG/Asset 6.svg"
              className="w-10"
              alt="Nankeen Logo"
            />
          </a>

          <span className="text-White -mt-1 hidden self-center whitespace-nowrap text-2xl font-semibold md:block">
            Nankeen
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="bg-Harvest-Gold mb-2 me-2 mt-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
          >
            <Link to="/Contact" className="text-black">
              Contact Me
            </Link>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className=" text-Harvest-Gold h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              onClick={handleMenu}
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col  p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 rtl:space-x-reverse ">
            <li>
              <a
                href="#"
                className=" text-Harvest-Gold block rounded px-3 py-2 md:p-0 "
                aria-current="page"
              >
                <Link to="/" className="active:text-Harvest-Gold">
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-Harvest-Gold block rounded px-3 py-2 text-slate-400 md:p-0 dark:border-gray-700"
              >
                <Link to="/About" className="active:text-Harvest-Gold">
                  About
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-Harvest-Gold block rounded px-3 py-2 text-slate-400 md:p-0 dark:border-gray-700"
              >
                <Link to="/Skill" className="active:text-Harvest-Gold">
                  Skill
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-Harvest-Gold block rounded px-3 py-2 text-slate-400 md:p-0 dark:border-gray-700"
              >
                <Link
                  to="/Project"
                  className="active:text-Harvest-Gold focus:text-Harvest-Gold focus:ring-violet-300"
                >
                  Project
                </Link>
              </a>
            </li>
          </ul>
        </div>
        <div
          id="dropdown"
          className={`absolute right-0 top-full mt-2 ${
            isOpen ? "block" : "hidden"
          } divide-Harvest-Gold  z-10 w-auto divide-y rounded-lg bg-black`}
        >
          <ul className="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className=" block px-4 py-2">
                <Link to="/" className="text-Harvest-Gold">
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                <Link to="/About" className="text-Harvest-Gold">
                  About
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <Link to="/Skill" className="text-Harvest-Gold">
                  Skill
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <Link to="/Project" className="text-Harvest-Gold">
                  Project
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
