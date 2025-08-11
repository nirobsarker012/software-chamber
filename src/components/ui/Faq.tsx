import React from "react";
import star from "../../assets/components_svg/multi_stars.svg";
import left_arrow from "../../assets/components_svg/left_arrow.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Accordation from "../styles/Accordation";

const Faq: React.FC = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[34px] md:text-[48px] xl:text-[70px] font-medium font-bricol leading-9 md:leading-12 xl:leading-20 py-[40px] sm:py-[50px] max-w-[1200px] mx-auto">
          Comprehensive Answers to the Most
          <img src={star} alt="" className="inline-block mr-3.5" />
          Common Questions,{" "}
          <span className="text-gray-400">About Our Service</span>s and How We{" "}
          <span className="text-gray-400">Work</span>{" "}
          <img src={left_arrow} alt="" className="inline-block" />
        </h1>
      </div>
      {/* FAQ Section  */}
      <div className="flex justify-between items-center">
        <h1 className="font-medium font-bricol text-[40px] lg:text-[74px] xl:text-[110px]">
          FAQ
        </h1>
        <span className="inline-flex items-center gap-x-3.5 font-outfit text-[18px] sm:text-[20px] cursor-pointer">
          All FAQ
          <div className="bg-[#2CCEBA] flex items-center justify-center w-[58px] h-[58px] rounded-full text-black">
            <FaArrowRightLong />
          </div>
        </span>
      </div>
      {/* Border Bottom */}
      <div className="w-full my-4 h-[1px] bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.5),rgba(0,0,0,0.5)_12px,transparent_8px,transparent_20px)] mt-[60px] lg:mt-[156px]"></div>

      <Accordation />
    </div>
  );
};

export default Faq;
