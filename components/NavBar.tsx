"use client";

import { useState } from "react";
import { FaHome } from "react-icons/fa";
import HamMenuWithAnimation from "./HamMenuWithAnimation";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
type PageProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
export default function NavBar(props: PageProps) {
  const { darkMode, toggleDarkMode } = props;
  const [isHamMenuOpened, setIsHamMenuOpened] = useState(false);
  function toggleHam() {
    setIsHamMenuOpened((p) => !p);
  }
  return (
    <nav className="flex relative overflow-x-clip  items-center justify-between p-4 ">
      <header className="p-2 flex items-center">
        <Link href={"/"} className="hidden md:block font-bold text-xl">
          NG-TODO
        </Link>
        <FaHome className="text-blue-200 md:hidden text-lg" />
      </header>
      <div className="md:hidden">
        <span onClick={toggleHam}>
          <HamMenuWithAnimation IsOpened={isHamMenuOpened} />
        </span>
      </div>
      <ul
        className={`flex bg-blue-900 dark:bg-purple-900  absolute top-0 h-screen pt-14 pl-4 w-2/4 flex-col gap-4 md:flex-row md:bg-transparent md:dark:bg-transparent md:relative md:top-auto md:h-auto md:pt-0 md:pl-auto px-4 md:w-auto transition-all duration-500  ${
          isHamMenuOpened
            ? " right-0 md:right-auto"
            : " -right-[1000px] md:right-auto"
        } md:right-auto`}
      >
        <li className="hover:cursor-pointer" onClick={toggleDarkMode}>
          <ThemeSwitcher />
        </li>
        <Link href={"/login"}>Login/Register</Link>
        <a href="/about">About</a>
        <a href="/feedback">Feedback</a>
      </ul>
    </nav>
  );
}
