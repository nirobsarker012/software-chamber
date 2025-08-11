/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // No Navigation module here
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import right_arrow from "../../assets/components_svg/right_arrow.svg";
import "swiper/css";
import "swiper/css/pagination";

import img_1 from "../../assets/components_svg/efficiency.svg";
import img_2 from "../../assets/components_svg/adaptabilty.svg";
import img_3 from "../../assets/components_svg/scalability.svg";
import img_4 from "../../assets/components_svg/precision.svg";

const cards = [
  {
    title: "Efficiency",
    content:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    offset: "lg:mt-10",
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
    offset: "lg:mt-10",
    icon: img_3,
  },
  {
    title: "Scalability",
    content:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    offset: "lg:mt-5",
    icon: img_3,
  },
  {
    title: "Scalability",
    content:
      "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
    offset: "lg:mt-10",
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
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    }, 3000);
    return () => clearInterval(interval);
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
            <img src={right_arrow} alt="right arrow" className="w-4 h-4" />
          </div>
        </button>
      </div>
      <div className="relative container mb-[90px] lg:mb-[200px]">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between z-10 -translate-y-1/2">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="bg-black/80 hover:bg-black text-gray-300 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FiArrowLeft className="text-xl" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="bg-black/80 hover:bg-black text-gray-300 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FiArrowRight className="text-xl" />
          </button>
        </div>

        {/* Swiper Component */}
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: "custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={false}
          className="py-12"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-[#F3F3F3] rounded-xl shadow-md p-6 md:p-8 transition-all duration-300 ${
                  card.offset
                } ${
                  activeIndex === index ? "scale-105 shadow-lg" : "scale-100"
                }`}
              >
                <div className="flex justify-between items-start mb-4 lg:mt-3.5">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    {card.title}
                  </h2>
                  <span className="bg-[#2CCEBA] p-3 rounded-full">
                    <img src={card.icon} alt={card.title} className="w-6 h-6" />
                  </span>
                </div>
                <div className="border border-gray-400/20 max-w-[364px]"></div>
                <p className="text-gray-600 text-base md:text-lg mt-2.5">
                  {card.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
