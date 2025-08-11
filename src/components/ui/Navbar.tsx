import React, { useEffect, useState } from "react";
import navbar_img from "../../assets/logos_svg/nav_logo.svg";
import { IoMdLogOut } from "react-icons/io";
import menubar from "../../assets/components_svg/menu_bar.svg";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        className={`fixed top-0 right-0 w-full z-50 transition duration-300 py-[8px] ${
          isScrolled ? "bg-white/5 backdrop-blur-md shadow-lg" : "null"
        }`}
      >
        <div className="flex justify-between items-center container pt-2 lg:pt-0">
          {/* NavbarImage */}
          <img
            src={navbar_img}
            alt="software_chamber"
            className="cursor-pointer"
          />
          {/* Navbar Comtext */}
          <div className="flex items-center gap-x-[14px]  lg:gap-x-[20px]">
            <button className="md:inline-flex items-center bg-gradient-to-r from-gray-700 via-gray-500 to-white/60 text-white font-medium font-outfit py-[6px] px-[10px] lg:py-[12px] lg:px-[16px] text-[16px] lg:text-[22px] rounded-[60px] gap-1.5 border-2 border-white/34 cursor-pointer hidden">
              Contact US
              <div className="bg-white rounded-full text-black flex items-center justify-center w-[40px] h-[40px] text-[18px]">
                <IoMdLogOut />
              </div>
            </button>
            {/* Menu Bar */}
            <button className="bg-gradient-to-r from-gray-700 via-gray-500 to-white/60 border-2 border-white/34 py-3 px-2.5 lg:py-4.5 lg:px-4 rounded-full cursor-pointer">
              <img src={menubar} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
