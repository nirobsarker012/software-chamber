import React from "react";
import banner_btn from "../../assets/banner_frame/banner_btn.svg";
import project_logo from "../../assets/logos_svg/Logo.svg";
import { IoMdLogOut } from "react-icons/io";

const ProjectShowCase: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md py-10 px-6 sm:py-14 sm:px-10 lg:py-[62px] lg:px-[136px] relative overflow-hidden rounded-[32px] border-t border-teal-600">
      <div className="w-full flex flex-col items-center text-center">
        <img src={banner_btn} alt="" className="w-20 sm:w-28 lg:w-auto" />

        <span className="p-5 sm:p-6 bg-white rounded-[26px] mt-12 sm:mt-16">
          <img src={project_logo} alt="" className="w-16 sm:w-20 lg:w-auto" />
        </span>

        <h1 className="text-white font-medium font-bricol text-3xl sm:text-5xl lg:text-[80px] max-w-[1110px] leading-snug sm:leading-tight lg:leading-[80px] mt-8 mb-10 px-2">
          Uncover the Design and Development Projects{" "}
          <span className="text-gray">That Set Us Apart</span>
        </h1>

        <button className="inline-flex items-center bg-gradient-to-r from-gray-700 via-gray-500 to-white/60 text-white font-medium font-outfit py-2 px-4 sm:py-3 sm:px-6 lg:py-[12px] lg:px-[26px] text-sm sm:text-lg lg:text-[22px] rounded-[60px] gap-4 lg:gap-8 border-2 border-white/34 cursor-pointer">
          Contact US
          <div className="bg-white rounded-full text-black p-1.5 sm:p-2 text-base sm:text-lg lg:text-[18px]">
            <IoMdLogOut />
          </div>
        </button>
      </div>

      {/* Background blur elements */}
      <div className="absolute inset-0 w-[300px] sm:w-[500px] lg:w-[1110px] bg-[#00ffe0]/40 opacity-30 blur-[50px] rounded-full z-0 transform translate-x-20 sm:translate-x-32 lg:translate-x-40 -translate-y-40 lg:-translate-y-96"></div>

      <div className="absolute inset-0 w-[150px] sm:w-[180px] lg:w-[220px] h-[400px] sm:h-[500px] lg:h-[700px] bg-[#00ffe0]/40 opacity-30 blur-[80px] rounded-full z-0 rotate-45 transform translate-x-4 sm:translate-x-8 lg:translate-x-[20px] translate-y-20 sm:translate-y-28 lg:translate-y-90"></div>

      <div className="absolute inset-0 w-[150px] sm:w-[180px] lg:w-[220px] h-[400px] sm:h-[500px] lg:h-[700px] bg-[#00ffe0]/40 opacity-30 blur-[80px] rounded-full z-0 -rotate-45 transform translate-x-[250px] sm:translate-x-[500px] lg:translate-x-[1110px] translate-y-20 sm:translate-y-28 lg:translate-y-90"></div>
    </div>
  );
};

export default ProjectShowCase;
