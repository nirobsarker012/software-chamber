import React from "react";
import contact_img from "../../assets/font_images/contact.svg";
import right_arrow from "../../assets/components_svg/right_arrow.svg";

const Contact: React.FC = () => {
  return (
    <div className="container py-[60px] sm:py-[80px] xl:py-[158px]">
      <div className="flex flex-col text-center items-center justify-center px-4">
        {/* Contact Title */}
        <h1 className="font-bricol text-[32px] sm:text-[42px] lg:text-[62px] xl:text-[92px] font-semibold max-w-[1000px] mb-[20px] xl:mb-[40px] lg:leading-24 tracking-tight">
          Let’s talk about your next project.{" "}
          <span className="text-gray-500">We’re here to help.</span>
        </h1>
        {/* Contact Desc */}
        <p className="font-outfit text-gray-600 text-[16px] sm:text-[18px] lg:text-[28px] mb-[40px] sm:mb-[70px] lg:mb-[140px] max-w-[712px]">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-[40px] lg:gap-x-[64px] px-4">
        <div className="lg:col-span-5 flex justify-center">
          <img src={contact_img} alt="Contact" className="max-w-full h-auto" />
        </div>
        <div className="lg:col-span-7">
          <form className="w-full flex flex-col text-gray-700 gap-y-[18px]">
            <input
              className="bg-[#f3f3f3] py-[18px] px-[25px] font-outfit text-[16px] rounded-[16px]"
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#f3f3f3] py-[18px] px-[25px] font-outfit text-[16px] rounded-[16px]"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="bg-[#f3f3f3] py-[18px] px-[25px] font-outfit text-[16px] rounded-[16px]"
              type="email"
              placeholder="Email"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <select className="bg-[#f3f3f3] py-[18px] px-[25px] font-outfit text-[16px] rounded-[16px] sm:w-[120px]">
                <option value="">+88</option>
                <option value="">+99</option>
                <option value="">+72</option>
              </select>
              <input
                className="bg-[#f3f3f3] py-[18px] px-[25px] font-outfit text-[16px] w-full rounded-[16px]"
                type="tel"
                placeholder="Phone"
              />
            </div>
            <input
              className="bg-[#f3f3f3] py-[18px] px-[25px] font-outfit text-[16px] rounded-[16px]"
              type="text"
              placeholder="Job Title"
            />
            <textarea
              className="bg-[#f3f3f3] py-[18px] px-[25px] font-outfit text-[16px] rounded-[16px] min-h-[120px]"
              placeholder="Your message"
            ></textarea>
            <div className="">
              <button className="bg-gradient-to-r from-[#2CCEBA] to-[#16AD71] rounded-[60px] px-4 py-4 text-white font-semibold font-outfit text-[24px] inline-flex items-center gap-x-[50px] lg:gap-x-[100px] cursor-pointer">
                Submit
                <div className="bg-white rounded-full text-black flex justify-center items-center w-[50px] h-[50px] text-[14px] sm:text-[16px] lg:text-[18px]">
                  <img src={right_arrow} alt="" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
