import React from "react";
import white_right_arr from "../../assets/components_svg/white_right_arrow.svg";
import footer_img from "../../assets/font_images/footer.svg";

type contactItems = {
  title?: string;
  desc?: string;
  name?: string;
  icon?: string;
};

const SocialItems: contactItems[] = [
  { name: "Instagram", icon: white_right_arr },
  { name: "Twitter", icon: white_right_arr },
  { name: "Tiktok", icon: white_right_arr },
  { name: "Facebook", icon: white_right_arr },
  { name: "Linkedin", icon: white_right_arr },
  { name: "Youtube", icon: white_right_arr },
];

const contuctInfo: contactItems[] = [
  {
    title: "Address",
    desc: `1901 thornridge Cir, 
Shiloh, Hawaii 81063`,
  },
  { title: "Phone", desc: `[+1] 872-298-3989` },
  { title: "Email", desc: `hello@tranzit.com` },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-[40px] sm:py-[60px] lg:pt-[154px]">
      <div className="container px-4 sm:px-6 lg:px-0">
        <h1 className="uppercase font-semibold font-bricol text-white text-[28px] sm:text-[38px] md:text-[54px] lg:text-[74px] xl:text-[100px] mb-[20px] lg:mb-[36px]">
          let's talk
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-start">
          {/* Left Section */}
          <div className="lg:col-span-5">
            <p className="font-outfit text-[14px] sm:text-[16px] lg:text-[22px] max-w-[400px] text-gray-400 mb-8">
              A new era of energy, elegance, and elite competition begins here.
              Where passion meets performance on the court like never before.
            </p>

            {/* Social Name */}
            <div>
              <h4 className="font-bricol text-[20px] sm:text-[24px] font-semibold mb-[20px] text-gray-400">
                Social media
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                {SocialItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="inline-flex items-center font-outfit font-medium text-gray-400 text-[14px] sm:text-[16px] cursor-pointer hover:underline transition-all duration-300">
                      {item.name}
                    </span>
                    <img src={item.icon} alt="" className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4 flex flex-col gap-y-[30px] sm:gap-y-[40px] text-gray-400">
            {contuctInfo.map((singleItem, i) => (
              <div key={i} className="flex flex-col gap-y-2">
                <h4 className="font-semibold font-bricol text-[14px] sm:text-[18px] lg:text-[24px]">
                  {singleItem.title}
                </h4>
                <p className="font-light font-outfit text-[14px] sm:text-[16px] lg:text-[22px] whitespace-pre-line">
                  {singleItem.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Image */}
          <div className="lg:col-span-3 hidden lg:flex lg:justify-end">
            <img
              src={footer_img}
              alt="Footer Illustration"
              className="max-w-[200px] sm:max-w-[250px] lg:max-w-full lg:h-[340px]"
            />
          </div>
        </div>
        <div className="w-full my-4 h-[1px] bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.5),rgba(255,255,255,0.5)_12px,transparent_8px,transparent_20px)] mt-[60px] lg:mt-[156px]"></div>
        {/*  */}
        <div className="flex justify-between items-center">
          <span className="font-outfit text-[12px] lg:text-[18px] text-gray-400">
            2025 Software Chamber All Right Reserved
          </span>
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-x-[82px] items-center text-gray-400 font-medium font-outfit text-[16px]">
            <span className="corsor-pointer">Privacy Policy</span>
            <span className="corsor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
