import React, { useRef, useEffect } from "react";
import hero_blur_left from "../assets/banner_frame/hero_blur_left.svg";
import hero_blur_right from "../assets/banner_frame/hero_blur-right.svg";

import { FaArrowUp } from "react-icons/fa6";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/ui/Hero";
import Digital_Solu from "../components/ui/Digital_Solu";
import Service from "../components/ui/Service";
import Software from "../components/ui/Software";
import Passion from "../components/ui/Passion";
import Technology_Pattern from "../components/ui/Technology_Pattern";
import Faq from "../components/ui/Faq";
import ClientInfo from "../components/ui/ClientInfo";
import Contact from "../components/ui/Contact";
import Footer from "../components/ui/Footer";

const Home: React.FC = () => {
  const scrollToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollToTop = scrollToTopRef.current;
      if (!scrollToTop) return;

      scrollToTop.classList.toggle("translate-y-full", window.scrollY < 400);
      scrollToTop.classList.toggle("scale-0", window.scrollY < 400);

      const middleScreen = document.documentElement.scrollHeight / 2;
      scrollToTop.classList.toggle("rotate-180", middleScreen > window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    const middleScreen = document.documentElement.scrollHeight / 2;

    if (middleScreen > window.scrollY) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        onClick={handleScrollToTop}
        ref={scrollToTopRef}
        className="bg-gray-200 shadow-xl w-12 aspect-square rounded-full rotate-180 flex justify-center items-center fixed bottom-5 right-2 z-[99999] duration-300 translate-y-full scale-0 cursor-pointer"
      >
        <FaArrowUp />
      </button>

      <div className="relative w-full bg-primary overflow-hidden">
        <div className="relative z-10 text-white text-4xl p-10">
          <div className="absolute -top-50 -left-100 z-[400]">
            <img src={hero_blur_left} alt="" className="inline-block" />
          </div>
          <div className="absolute top-50 -left-120 z-[400]">
            <img src={hero_blur_left} alt="" className="inline-block" />
          </div>
          <div className="absolute -top-50 -right-100 z-[400]">
            <img src={hero_blur_right} alt="" className="inline-block" />
          </div>
          <div className="absolute top-50 -right-120 z-[400]]">
            <img src={hero_blur_right} alt="" className="inline-block" />
          </div>
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className="overflow-hidden">
        <Digital_Solu />
        <Service />
        <Software />
        <Passion />
        <Technology_Pattern />
        <Faq />
        <ClientInfo />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
