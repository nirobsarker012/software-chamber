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
        className={`fixed top-0 right-0 w-full z-50 transition duration-300 py-[20px] md:py-[30] lg:py-[38px] ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-primary"
        }`}
      >
        <div className="flex justify-between items-center container">
          {/* NavbarImage */}
          <img
            src={navbar_img}
            alt="software_chamber"
            className="cursor-pointer"
          />
          {/* Navbar Comtext */}
          <div className="flex items-center gap-x-[20px]">
            <button className="inline-flex items-center bg-gradient-to-r from-gray-700 via-gray-500 to-white/60 text-white font-medium font-outfit py-[12px] px-[16px] text-[16px] lg:text-[22px] rounded-[60px] gap-1.5 border-2 border-white/34 cursor-pointer">
              Contact US
              <div className="bg-white rounded-full text-black p-2 text-[18px]">
                <IoMdLogOut />
              </div>
            </button>
            {/* Menu Bar */}
            <button className="bg-gradient-to-r from-gray-700 via-gray-500 to-white/60 border-2 border-white/34 py-4.5 px-4 rounded-full cursor-pointer">
              <img src={menubar} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
