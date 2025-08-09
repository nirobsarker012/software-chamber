import { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import img_1 from "../../assets/components_svg/efficiency.svg";
import img_2 from "../../assets/components_svg/adaptabilty.svg";
import img_3 from "../../assets/components_svg/scalability.svg";
import img_4 from "../../assets/components_svg/precision.svg";
import { FaChevronRight } from "react-icons/fa";
import right_arrow from "../../assets/components_svg/right_arrow.svg";

interface Card {
  title: string;
  content: string;
  offset: string;
  icon: string;
}

const cards: Card[] = [
  {
    title: "Efficiency",
    content:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    offset: "lg:-mt-10",
    icon: img_1,
  },
  {
    title: "Adaptability",
    content:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    offset: "lg:mt-5",
    icon: img_2,
  },
  {
    title: "Scalability",
    content:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    offset: "lg:-mt-10",
    icon: img_3,
  },
  {
    title: "Precision",
    content:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    offset: "lg:mt-5",
    icon: img_4,
  },
];

export default function Passion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      {/* Passion Header Content */}
      <div className="flex flex-col justify-center container text-center py-10 md:py-16 lg:py-24">
        <h1 className="font-medium font-bricol sm:text-[32px] md:text-[42px] lg:text-[60px] xl:text-[92px] xl:max-w-[990px] mx-auto lg:leading-26">
          Why Choose Softwarechamber
        </h1>
        <p className="max-w-[800px] mx-auto text-gray-500">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>

        <button className="inline-flex items-center gap-x-3 sm:gap-x-5 lg:gap-x-8 bg-gradient-to-r from-[#2CCEBA] to-[#16AD71] text-white font-semibold font-outfit py-[6px] px-[10px] lg:py-[12px] lg:px-[16px] text-[14px] sm:text-[16px] lg:text-[22px] rounded-[60px] border-2 mt-5 max-w-[230px] mx-auto cursor-pointer">
          Let's Discuss
          <div className="bg-white rounded-full text-black p-1 sm:p-1.5 lg:p-2 text-[14px] sm:text-[16px] lg:text-[18px]">
            <img src={right_arrow} alt="" />
          </div>
        </button>
      </div>
      <div className="relative py-6 overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition-colors"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition-colors"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>

        {/* Cards Container */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md p-6 md:p-8 transition-all duration-300 ${
                card.offset
              } ${index === activeIndex ? "scale-105 shadow-lg" : "scale-100"}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {card.title}
                </h2>
                <span className="bg-[#2CCEBA] p-3 rounded-full">
                  <img src={card.icon} alt={card.title} className="w-6 h-6" />
                </span>
              </div>
              <div className="border border-gray-400/20"></div>
              <p className="text-gray-600 text-base md:text-lg mt-2.5">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
