import React, { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOnClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={handleOnClick}
            role="button"
            onKeyPress={handleOnClick}
            tabIndex={0}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
          </div>

          <div
            className={
              isNavOpen ? "showMenuNav opacity-90 bg-sky-50" : "hideMenuNav"
            }
          >
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-4"
              onClick={handleOnClick}
              role="button"
              onKeyPress={handleOnClick}
              tabIndex={0}
            >
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <div
                role="button"
                onClick={handleOnClick}
                onKeyPress={handleOnClick}
                tabIndex={0}
                className="font-bold border-b text-gray-900 border-gray-900 my-8 uppercase"
              >
                <Link href="/">Početna stranica</Link>
              </div>
              <div
                role="button"
                onClick={handleOnClick}
                onKeyPress={handleOnClick}
                tabIndex={0}
                className="font-bold border-b text-gray-900 border-gray-900 my-8 uppercase"
              >
                <Link href="/join">Učlani se</Link>
              </div>
             
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 50;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default HamburgerMenu;
