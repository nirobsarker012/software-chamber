import React from "react";
import hero_bg from "../../assets/banner_frame/hero.svg";
import singleStar from "../../assets/components_svg/star_1.svg";
import hero_img_1 from "../../assets/components_svg/hero_im_1.svg";
import Hero_cards from "./Hero_cards";
// import hero_img_2 from "../../assets/components_svg/hero_in_2.svg";

const Hero: React.FC = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center py-70 md:py-100 relative max-w-[1300px] mx-auto"
        style={{ backgroundImage: `url(${hero_bg})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#3d3d3d_1px,transparent_1px)] [background-size:20px_20px] transform translate-y-30">
          {/* Hero Content */}
          <div
            className="px-[12px] py-[10px] text-[14px] font-inter  bg-gradient-to-r from-teal-500/60 via-black to-teal-500/60 rounded-[30px] border border-teal-600
              hover:from-teal-600 hover:via-black hover:to-teal-600
              transition-all duration-300 max-w-[248px] mx-auto"
          >
            <span className="inline-flex items-center gap-x-2">
              <img className="" src={singleStar} alt="" />
              Smarter Idea, instant solutions
            </span>
          </div>
          {/* Hero-Title */}
          <div className="text-center max-w-[450px] md:max-w-[550px] lg:max-w-[1110px] mx-auto py-4 sm:text-[46px] md:text-[56px] lg:text-[110px] bg-gradient-to-b from-[#00ffe0] to-white bg-clip-text text-transparent font-medium font-bricol">
            <h1 className="">
              We are your Software Development{" "}
              <img
                src={hero_img_1}
                alt=""
                className="w-[50px] xl:w-[70px] inline-block"
              />{" "}
              <img
                src={hero_img_1}
                alt=""
                className="w-[50px] xl:w-[70px] inline-block"
              />{" "}
              Team in The Cloud.
            </h1>
          </div>
          {/* Hero Card Section */}
        </div>
        <div className="flex justify-center mt-4 absolute transform translate-y-12">
          <Hero_cards />
        </div>
      </div>
    </main>
  );
};

export default Hero;
