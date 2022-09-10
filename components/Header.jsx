import React from "react";
import Link from "next/link";
import useScrollPosition from "../hook/useScrollPosition";
import logoUnijeWhite from "../public/logoUnijeWhite.png";
import logoUnijeDark from "../public/logoUnijeDark.png";

function Header() {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      id="header"
      className={`${
        scrollPosition > 0 ? "bg-white" : "bg-transparent"
      } duration-300 fixed w-full z-30 top-0 text-white sticky`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            <img
              alt="Logo unija"
              width="180"
              src={
                scrollPosition > 0 ? logoUnijeDark?.src : logoUnijeWhite?.src
              }
            />
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            type="button"
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li
              className={`${
                scrollPosition > 0 ? "text-black" : "text-white"
              }  inline-block py-2 px-4  font-bold no-underline mr-3`}
            >
              <Link href="/">Početna</Link>
            </li>
            <li
              className={`${
                scrollPosition > 0 ? "text-black" : "text-white"
              }  inline-block py-2 px-4  font-bold no-underline mr-3`}
            >
              <Link href="/join">Učlani se</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr
        className={`border-b ${
          scrollPosition > 0 ? "border-gray-900" : "border-gray-100"
        } opacity-25 my-0 py-0`}
      />
    </nav>
  );
}

export default Header;
