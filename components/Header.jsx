import React, { useState } from "react";
import Link from "next/link";
import useScrollPosition from "../hook/useScrollPosition";
import logoUnijeWhite from "../public/logoUnijeWhite.png";
import logoUnijeDark from "../public/logoUnijeDark.png";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [open, setOpen] = useState(false);
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
          <HamburgerMenu
            categories={[]}
            open={open}
            setOpen={setOpen}
          />
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
