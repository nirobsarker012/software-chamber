import React from "react";
import bannerBtn from "../../assets/banner_frame/banner_btn.svg";
import client_img from "../../assets/font_images/Base.svg";
import company_logo from "../../assets/logos_svg/logo_2.svg";
const ClientInfo: React.FC = () => {
  return (
    <div className="bg-primary py-[120px] relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <img src={bannerBtn} alt="" className="mb-[40px]" />
          <h1 className="font-medium font-bricol text-[32px] lg:text-[42px] xl:text-[68px] text-center max-w-[1000px] text-white xl:leading-20 mb-[64px] xl:mb-[160px]">
            Don’t just take our word for it. Hear what{" "}
            <span className="text-gray-500">our clients say </span>
          </h1>
        </div>
        {/* Client Card */}
        <div className="w-full py-[32px] lg:py-[68px] px-[30px] md:px-[58px] lg:px-[128px] bg-[#0B0B0F] text-white p-8 rounded-2xl shadow-[0_0_80px_-20px_rgba(0,255,255,0.4)] border-t border-teal-500">
          <p className="font-medium font-outfit text-[24px] lg:text-[40px] lg:leading-14">
            "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna
            risus phasellus nec. In facilisis pulvinar sagittis odio nibh
            condimentum aliquet commodo."
          </p>
          {/* Client Info */}
          <div className="flex justify-between mt-[28px] lg:mt-[58px]">
            <div className="flex items-center gap-x-[12px] lg:gap-x-[24px]">
              <img src={client_img} alt="alex larkins" className="w-[60px]" />
              <div className="flex flex-col space-y-1.5">
                <h4 className="font-medium font-bricol text-[16px] lg:text-[20px]">
                  Alex Larkis
                </h4>
                <span className="text-gray-500 font-outfit font-medium">
                  Art director at Airbnb
                </span>
              </div>
            </div>
            {/* Logo */}
            <img src={company_logo} alt="" className="inline-block" />
          </div>
        </div>
      </div>
      {/* Top */}
      <div className="absolute inset-0 w-[150px] lg:w-[220px] h-[200px] lg:h-[700px] xl:h-[300px] bg-[#00ffe0]/40 opacity-30 blur-[80px] rounded-full"></div>
      {/* Bottom */}
      <div className="absolute inset-0 w-[150px] sm:w-[90px] lg:w-[220px] h-[400px] sm:h-[500px] lg:h-[700px] bg-[#00ffe0]/40 opacity-30 blur-[80px] rounded-full  -rotate-45 transform translate-x-[300px] md:translate-x-[700px] lg:translate-x-[900px] translate-y-140 md:translate-y-120 lg:translate-y-120 xl:translate-x-280"></div>
    </div>
  );
};

export default ClientInfo;
