import React, { useContext } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoDiscord } from "react-icons/io5";
import { InputFields } from "./HeroSec";
import { ThemeContext } from "../ThemeContext";

const BeforeFootersec = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`mx-[30px] mt-10 md:mx-[72px] lg:mx-[140px] lg:flex lg:justify-evenly lg:items-center ${
        isDarkMode ? "text-black" : "text-white"
      }`}
    >
      <div className="flex flex-col gap-y-5">
        <h1 className="text-[22px] font-bold">NFT Marketplace</h1>
        <p className="text-base">
          NFT marketplace UI created with Anima for Figma.
        </p>
        <div className="flex flex-col gap-y-4">
          <p>Join our community</p>
          <div className="flex gap-x-[10px] items-center">
            <IoLogoDiscord className="w-8 h-8 " />
            <IoLogoYoutube className="w-8 h-8" />
            <IoLogoTwitter className="w-8 h-8" />
            <IoLogoInstagram className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[30px] gap-y-[30px] ">
        <h1 className="text-[22px] font-bold ">Explore</h1>
        <p>Marketplace</p>
        <p>Rankings</p>
        <p>Connect a wallet</p>
      </div>
      <div className="mt-[30px] ">
        <h1 className="text-[22px] font-bold mb-[20px]">
          Join our weekly digest
        </h1>
        <p className="mb-5">
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <div className="flex flex-col">
          <InputFields placeholder="Enter Your Email Address" />
          <button className="text-base font-semibold bg-[#A259FF] my-7 py-3 rounded-3xl text-center mx-[50px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeFootersec;
