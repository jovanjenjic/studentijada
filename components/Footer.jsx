/* eslint-disable */
import React from "react";
import logoUnijeUspravanDark from "../public/logoUnijeUspravanDark.png";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a
              className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <img
                alt="Logo unija"
                width="150"
                src={logoUnijeUspravanDark?.src}
              />
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Stranice</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Početna
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  href="/join"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Učlani se
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Društvene mreze</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.facebook.com/groups/1943554672551357"
                  target="_blank"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/studentska-unija-fakulteta-tehni%C4%8Dkih-nauka/about/"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://www.instagram.com/studentskaunija.ftn/"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Projekti</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://www.codeference.org/"
                  className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                >
                  Codeference
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
