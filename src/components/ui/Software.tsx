import React from "react";
// import grid_icon from "../../assets/banner_frame/grid_right.svg";
// import grid_layout_left from "../../assets/banner_frame/grid_layout_left.svg";
import banner_btn from "../../assets/banner_frame/banner_btn.svg";
import { IoMdLogOut } from "react-icons/io";
import earth_img from "../../assets/banner_frame/earth.svg";

const Software: React.FC = () => {
  return (
    <div className="bg-primary pt-[160px] relative software overflow-hidden">
      {/* <div className="">
        <img
          src={grid_layout_left}
          alt=""
          className="z-[-999px] inline-block"
        />
      </div> */}
      <div className="container relative px-4 sm:px-6 lg:px-8">
        {/* Content Center */}
        <div className="flex items-center justify-center flex-col text-center">
          {/* Top Image */}
          <img
            src={banner_btn}
            alt=""
            className="w-[120px] sm:w-[180px] md:w-[220px] lg:w-[300px]"
          />

          {/* Heading */}
          <h1 className="max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[900px] xl:max-w-[1110px] mx-auto py-4 text-[28px] sm:text-[36px] md:text-[46px] lg:text-[70px] xl:text-[110px] bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent font-medium font-bricol lg:leading-28">
            Our Software Development Process
          </h1>

          {/* Subtext */}
          <p className="max-w-[300px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[938px] text-gray-500 font-outfit text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>

          {/* Button */}
          <button className="inline-flex items-center gap-x-3 sm:gap-x-5 lg:gap-x-8 bg-gradient-to-r from-gray-700 via-gray-500 to-white/60 text-white font-medium font-outfit py-[6px] px-[10px] lg:py-[12px] lg:px-[16px] text-[14px] sm:text-[16px] lg:text-[22px] rounded-[60px] border-2 border-white/34 cursor-pointer mt-5">
            Contact US
            <div className="bg-white rounded-full text-black p-1 sm:p-1.5 lg:p-2 text-[14px] sm:text-[16px] lg:text-[18px]">
              <IoMdLogOut />
            </div>
          </button>
        </div>

        {/* Earth Image */}
        <div className="flex justify-center">
          <img
            src={earth_img}
            alt=""
            className="mt-[30px] sm:mt-[40px] lg:mt-[50px] max-w-[280px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Software;
