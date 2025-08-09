import React from "react";
import Marquee from "react-fast-marquee";
import sopify_img from "../../assets/social_svg/Spotify.svg";
import talent_img from "../../assets/social_svg/talentqi.svg";
import dropbox_img from "../../assets/social_svg/Dropbox.svg";
import fliq_img from "../../assets/social_svg/Fliqpay.svg";
import slack_img from "../../assets/social_svg/slack.svg";
import ProjectShowCase from "./ProjectShowCase";
import SoftwareMarquee from "./SoftwareMarquee";

interface SocialDetails {
  id: number;
  name: string;
  icon: string;
}

const socialDetails: SocialDetails[] = [
  {
    id: 1,
    name: "Spotify",
    icon: sopify_img,
  },
  {
    id: 2,
    name: "TalentQI",
    icon: talent_img,
  },
  {
    id: 3,
    name: "DropBox",
    icon: dropbox_img,
  },
  {
    id: 4,
    name: "Filqpay",
    icon: fliq_img,
  },
  {
    id: 5,
    name: "Slack",
    icon: slack_img,
  },
];

console.log(socialDetails);

const Technology_Pattern: React.FC = () => {
  return (
    <div className="bg-primary py-[40px] lg:py-[80px] overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="relative text-white">
            <h1 className="font-medium text-[42px] text-center xl:text-start md:text-[64px] xl:text-[92px] font-bricol max-w-[924px] lg:leading-24">
              Our Stack Powers of the
              <span className="text-gray-400">World’s</span> Most{" "}
              <span className="text-gray-400">Beloved Companies</span>
            </h1>
            <div className="absolute inset-0 w-[500px] bg-[#00ffe0]/60 opacity-10 rounded-full blur-[50px]"></div>
          </div>
          {/* Social Icons */}
          <div className="grid grid-cols-6 gap-[15px] mt-8">
            {socialDetails.map((social) => (
              <div key={social.id} className="col-span-3">
                <div
                  className={`flex items-center gap-1 bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA]/10 px-4 py-3.5 xl:py-[12px] xlpx-[20px] rounded-[78px] cursor-pointer 
    ${social.id === 3 || social.id === 4 ? "-ml-3" : ""} 
    ${social.id === 5 ? "ml-8 col-span-6 w-full " : ""}`}
                >
                  <span className="bg-white p-[12px] xl:p-[18px] rounded-full">
                    <img src={social.icon} alt="" />
                  </span>
                  <span className="font-medium text-[18px] font-outfit text-white">
                    {social.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Project show case */}
        <div className="py-[160px]">
          <ProjectShowCase />
        </div>
      </div>
      {/* Marquee */}
      <div className="flex flex-col gap-5">
        <Marquee speed={40} delay={0} loop={0} direction="left" pauseOnHover>
          <SoftwareMarquee />
        </Marquee>
        <Marquee speed={40} delay={0} loop={0} direction="right" pauseOnHover>
          <SoftwareMarquee />
        </Marquee>
      </div>
    </div>
  );
};

export default Technology_Pattern;
