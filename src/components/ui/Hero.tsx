import React from "react";
import banner_btn from "../../assets/banner_frame/banner_btn.svg";
import hero_img from "../../assets/components_svg/hero_im_1.svg";
import { IoMdLogOut } from "react-icons/io";
import BannerCardDesign from "../styles/BannerCardDesign";
const Hero: React.FC = () => {
  return (
    <main data-aos="fade-up" data-aos-delay="50">
      <div className="min-h-[500px] xl:min-h-screen bg-[url('assets/banner_frame/hero.svg')] bg-cover bg-center container relative">
        {/* Background pattern - made responsive */}
        <div className="absolute top-70 lg:top-90 xl:top-1/2 left-1/2 w-full max-w-[95vw] md:w-[800px] lg:w-[1000px] xl:w-[1200px] sm:h-[400px] md:h-[500px] bg-[radial-gradient(#3d3d3d_1px,transparent_1px)] [background-size:10px_10px] -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col justify-center items-center h-full px-4 sm:px-6">
            {/* Banner button image - responsive sizing */}
            <img
              src={banner_btn}
              alt=""
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[320px] mb-[15px] sm:mb-[30px]"
            />

            {/* Main heading - responsive text and layout */}
            <h1 className="font-medium font-bricol text-[28px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[110px] text-center text-transparent bg-clip-text bg-gradient-to-b from-teal-500 via-teal-100 to-gray-200 mb-[15px] sm:mb-[30px] leading-tight">
              We are your Software Development{" "}
              <span className="inline-flex">
                <img
                  src={hero_img}
                  alt=""
                  className="hidden md:w-[90px] md:h-[90px] md:inline-block mx-1 mt-3"
                />
                <img
                  src={hero_img}
                  alt=""
                  className="hidden md:w-[90px] md:h-[90px] md:inline-block mx-1 mt-3"
                />
              </span>
              Team in the Cloud
            </h1>

            {/* Contact button - responsive sizing */}
            <button className="inline-flex items-center gap-x-[20px] sm:gap-x-[40px] md:gap-x-[60px] bg-gradient-to-r from-gray-700 via-gray-500 to-white/60 text-white font-medium font-outfit py-[4px] px-[8px] sm:py-[6px] sm:px-[10px] lg:py-[8px] lg:px-[16px] text-[14px] sm:text-[16px] lg:text-[21px] rounded-[60px] border-2 border-white/34 cursor-pointer">
              Contact US
              <div className="bg-white rounded-full text-black w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center text-[14px] sm:text-[16px] md:text-[18px]">
                <IoMdLogOut />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Banner-card */}
      <BannerCardDesign />
    </main>
  );
};

export default Hero;
