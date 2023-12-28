import React, { useContext } from "react";
import HeroImg from "../assets/figma-applo.png";
import { LuUser2 } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { ThemeContext } from "../ThemeContext";

export const InputFields = ({ placeholder, svgIcon }) => {
  return (
    <div
      className={`flex items-center rounded-[20px] text-black bg-white px-5 py-4 gap-3 `}
    >
      {svgIcon}
      <input className="text-base" type="text" placeholder={placeholder} />
    </div>
  );
};

const HeroSec = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col md:flex-row gap-[60px] ${
        isDarkMode ? "text-black" : "text-white"
      }`}
    >
      <div className="w-[100%] md:w-[90%]  lg:w-[50%]">
        <img src={HeroImg} alt="" />
      </div>
      <div className="mx-8">
        <h1 className="text-[51px] font-semibold leading-[56px] my-5">
          Create Account
        </h1>
        <p className="text-[22px] font-normal mb-10">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <form className="flex flex-col gap-y-4">
          <InputFields
            placeholder="Username"
            svgIcon={<LuUser2 className="text-black" />}
          />
          <InputFields
            placeholder="Email Addres"
            svgIcon={<AiOutlineMail className="text-black" />}
          />
          <InputFields
            placeholder="Password"
            svgIcon={<RiLockPasswordFill className="text-black" />}
          />
          <InputFields
            placeholder="Confirm Password"
            svgIcon={<RiLockPasswordFill className="text-black" />}
          />
          <button className="text-base font-semibold bg-[#A259FF] my-7 py-3 rounded-3xl text-center mx-[50px]">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSec;
