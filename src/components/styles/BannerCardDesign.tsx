import React from "react";
import website_img from "../../assets/card_img/website_development.svg";
import mobile_img from "../../assets/card_img/mobile_app_development.svg";
import ui_ux from "../../assets/card_img/ui_ux.svg";
import software_img from "../../assets/card_img/software_service.svg";
import img_3 from "../../assets/card_img/card_img_3.svg";
import img_2 from "../../assets/card_img/card_img_2.svg";
import img_1 from "../../assets/card_img/card_img_1.svg";

const BannerCardDesign: React.FC = () => {
  return (
    <>
      {/* Banner card*/}
      <div className="flex flex-col lg:flex-row justify-between container md:mt-6">
        {/* Side images - hidden on mobile, shown from md upwards */}
        <div className="hidden xl:flex flex-col space-y-20 lg:space-y-40 mt-[30px] lg:mt-[50px]">
          <img src={website_img} alt="" className="w-[100px] lg:w-auto" />
          <img src={mobile_img} alt="" className="w-[100px] lg:w-auto" />
        </div>

        <div className="relative flex items-center justify-center w-full mb-20">
          {/* Card 1 - Back */}
          <div className="absolute top-10 md:top-20 xl:top-26 z-10 scale-75 md:scale-90">
            <div className="bg-white/5 backdrop-blur-md py-[20px] px-[24px] md:py-[28px] md:px-[36px] rounded-[40px] md:rounded-[56px]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-x-[20px] md:gap-x-[50px]">
                <div className="max-w-[200px] md:max-w-[500px] mb-4 md:mb-0">
                  <img src={img_1} alt="" className="w-full" />
                </div>
                <div className="flex flex-col max-w-[280px] md:max-w-[328px]">
                  <h3 className="font-rubik font-medium text-[24px] md:text-[34px] text-white mb-[10px] md:mb-[20px]">
                    Software Service Solutions
                  </h3>
                  <p className="font-inter text-[16px] md:text-[28px] text-gray-400 mb-[20px] md:mb-[40px]">
                    Plan, track, and manage projects with precision tools.
                  </p>
                  <button className="py-[12px] px-[25px] md:py-[20px] md:px-[35px] bg-gray-700/40 text-gray-300 rounded-[40px] md:rounded-[56px] text-[14px] md:text-[18px] font-rubik font-medium max-w-[180px] md:max-w-[230px] cursor-pointer">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Middle */}
          <div className="absolute top-0 md:top-10 z-20 scale-85 md:scale-100">
            <div className="bg-white/5 backdrop-blur-md py-[20px] px-[24px] md:py-[28px] md:px-[36px] rounded-[40px] md:rounded-[56px]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-x-[20px] md:gap-x-[50px]">
                <div className="max-w-[200px] md:max-w-[500px] mb-4 md:mb-0">
                  <img src={img_2} alt="" className="w-full" />
                </div>
                <div className="flex flex-col max-w-[280px] md:max-w-[328px]">
                  <h3 className="font-rubik font-medium text-[24px] md:text-[34px] text-white mb-[10px] md:mb-[20px]">
                    Our Professional Trainig Platform
                  </h3>
                  <p className="font-inter text-[16px] md:text-[28px] text-gray-400 mb-[20px] md:mb-[40px]">
                    Stream and broadcast videos in crystal-clear quality.
                  </p>
                  <button className="py-[12px] px-[25px] md:py-[20px] md:px-[35px] bg-gray-700/40 text-gray-300 rounded-[40px] md:rounded-[56px] text-[14px] md:text-[18px] font-rubik font-medium max-w-[180px] md:max-w-[230px] cursor-pointer">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Front */}
          <div className="relative -top-4 md:top-0 z-30 scale-90 md:scale-105">
            <div className="bg-white/5 backdrop-blur-md py-[20px] px-[24px] md:py-[28px] md:px-[36px] rounded-[40px] md:rounded-[56px]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-x-[20px] md:gap-x-[50px]">
                <div className="max-w-[200px] md:max-w-[500px] mb-4 md:mb-0">
                  <img src={img_3} alt="" className="w-full" />
                </div>
                <div className="flex flex-col max-w-[280px] md:max-w-[328px]">
                  <h3 className="font-rubik font-medium text-[24px] md:text-[34px] text-white mb-[10px] md:mb-[20px]">
                    Software Service Solutions
                  </h3>
                  <p className="font-inter text-[16px] md:text-[28px] text-gray-400 mb-[20px] md:mb-[40px]">
                    Plan, track, and manage projects with precision tools.
                  </p>
                  <button className="py-[12px] px-[25px] md:py-[20px] md:px-[35px] bg-gray-700/40 text-gray-300 rounded-[40px] md:rounded-[56px] text-[14px] md:text-[18px] font-rubik font-medium max-w-[180px] md:max-w-[230px] cursor-pointer">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side images - hidden on mobile, shown from md upwards */}
        <div className="hidden xl:flex flex-col space-y-20 lg:space-y-40 mt-[30px] lg:mt-[50px]">
          <img src={ui_ux} alt="" className="w-[100px] lg:w-auto" />
          <img src={software_img} alt="" className="w-[100px] lg:w-auto" />
        </div>
      </div>
    </>
  );
};

export default BannerCardDesign;
