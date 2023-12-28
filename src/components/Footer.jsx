import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`mt-[30px] md:mt-[50px] lg:mt[30px] ${
        isDarkMode ? "text-black" : "text-white"
      } mx-[30px]`}
    >
      <hr />
      <p className="text-[12px] mt-5 pb-10 md:text-center">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </div>
  );
};

export default Footer;
