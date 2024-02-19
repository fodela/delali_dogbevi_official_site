"use client";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState("pullUp");

  const handleToggleMenu = () => {
    if (isMenuOpen) {
      setMenuStyle("pullUp");
      setTimeout(() => {
        setIsMenuOpen(!isMenuOpen);
      }, 500);
    } else {
      setMenuStyle("dropDown");
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <header className="flex fixed top-0 right-0 left-0 border-b border-black dark:border-white  justify-between items-center w-11/12 mx-auto pb-2 z-50 backdrop-blur-md">
      <Link href="/">
        <div className="h-24 w-28 logo cursor-pointer"></div>
      </Link>
      <nav>
        <ul className="hidden md:flex gap-16 items-center justify-between text-xl">
          <li>
            {" "}
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Works</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className="md:hidden">
          <MdMenu
            className="dark:text-white"
            size={30}
            onClick={handleToggleMenu}
          />
        </button>
      </nav>

      {isMenuOpen && (
        <ul
          className={`absolute top-full back -z-20 bg-zinc-100 dark:bg-zinc-800 w-full border-t   flex flex-col gap-16 px-10 py-5 justify-between text-xl ${menuStyle}`}
        >
          <li
            className="dark:hover:text-white hover:underline "
            onClick={handleToggleMenu}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className="dark:hover:text-white hover:underline"
            onClick={handleToggleMenu}
          >
            <Link href="/portfolio">Works</Link>
          </li>
          <li
            className="dark:hover:text-white hover:underline"
            onClick={handleToggleMenu}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className="dark:hover:text-white hover:underline"
            onClick={handleToggleMenu}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navigation;
