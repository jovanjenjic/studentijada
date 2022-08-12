import React, { useState, useEffect } from "react";
import Link from "next/link";
import imgLogo from "../public/logo-crni.png";
import { getCategories } from "../services";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <nav className="bg-blue-50 shadow-lg">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl w-44 cursor-pointer">
            <Link href="/">
              <img src={imgLogo.src} alt="logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <HamburgerMenu
              categories={categories}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row hidden md:block -mx-2 my-auto">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer my-auto mt-0">
                {category.name}
              </span>
            </Link>
          ))}
          <Link href="/post">
            <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer my-auto mt-0">
              Posts
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
