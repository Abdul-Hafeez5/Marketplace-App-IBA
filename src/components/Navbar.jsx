import React, { useState, useContext } from "react";
import { LuUser2 } from "react-icons/lu";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Marketplace", "Ranking", "Connect a wallet"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        isDarkMode ? "text-black" : "text-white"
      } flex justify-between items-center px-12 py-5 `}
    >
      <div>
        <span className="text-2xl font-bold">NFT Marketplace</span>
      </div>
      <MdOutlineLightMode
        className={`hidden md:cursor-pointer md:block w-10 ${
          isDarkMode ? "text-black" : "text-white"
        } `}
        onClick={toggleTheme}
      />

      <div className="hidden md:flex items-center">
        <ul className="flex  text-base font-semibold leading-5 gap-2">
          {navLinks.map((item, index) => (
            <li className="px-5" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className=" bg-[#A259FF] flex px-[30px] rounded-[30px] py-4 items-center">
          <LuUser2 />
          <button className="pl-3 text-base font-semibold">Sign Up</button>
        </div>
      </div>
      <RiMenu2Line
        className={`md:hidden z-10 text-white`}
        onClick={() => toggleMenu()}
      />

      {isMenuOpen && (
        <ul className=" bg-black absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
          {navLinks.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
