import React from "react";
import multi_star from "../../assets/components_svg/multi_stars.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import right_arrow from "../../assets/components_svg/right_arrow.svg";
interface cardDetails {
  title?: string;
  subTitle?: string;
  icon?: string;
}

const cards: cardDetails[] = [
  {
    title: "Web & Mobile App Devolopment",
    subTitle:
      "Software Chamber specializes in creating powerful, scalable, and secure e-",
    icon: right_arrow,
  },
  {
    title: "Application Software Services",
    subTitle:
      "Software Chamber specializes in creating powerful, scalable, and secure e-",
    icon: right_arrow,
  },
  {
    title: "Software Coding & Optimuation",
    subTitle:
      "Software Chamber specializes in creating powerful, scalable, and secure e-",
    icon: right_arrow,
  },
];

const Service: React.FC = () => {
  return (
    <section>
      <div className="container py-[60px] sm:py-[80px] lg:py-[120px] px-4 sm:px-6">
        {/* Title Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-6 sm:gap-y-0">
          <h1 className="font-medium font-bricol text-[40px] sm:text-[60px] lg:text-[80px] xl:text-[110px] leading-tight">
            Services{" "}
            <img
              src={multi_star}
              alt=""
              className="inline-block w-8 sm:w-10 lg:w-12 align-middle"
            />
          </h1>
          <span className="inline-flex items-center gap-x-3.5 font-outfit text-[18px] sm:text-[20px] cursor-pointer">
            All Services
            <div className="bg-[#F3F3F3] py-[8px] px-[7px] rounded-full">
              <FaArrowRightLong />
            </div>
          </span>
        </div>

        {/* Service Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 mt-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group col-span-1 xl:col-span-4 py-[32px] sm:py-[42px] px-[20px] sm:px-[24px] rounded-[24px] bg-[#F3F3F3] hover:bg-[#27B4A3] hover:text-white duration-300 transition-all"
            >
              <div className="w-full flex flex-col space-y-[25px] sm:space-y-[35px]">
                <h2 className="font-bricol text-[28px] sm:text-[36px] lg:text-[42px] font-semibold leading-snug">
                  {card.title}
                </h2>
                <p className="font-outfit text-[16px] sm:text-[18px] text-gray-500 group-hover:text-white">
                  {card.subTitle}
                </p>
                <span className="bg-white w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] inline-flex items-center justify-center rounded-full shadow-lg cursor-pointer">
                  <img src={card.icon} alt="" className="inline-block" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
