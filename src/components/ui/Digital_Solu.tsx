import React from "react";

import star from "../../assets/components_svg/multi_stars.svg";
import left_arroe from "../../assets/components_svg/left_arrow.svg";
import digital_img from "../../assets/font_images/digital_sol.svg";
import CountUp from "../styles/Countup";

interface digitalContext {
  id?: number | string;
  title?: string;
  subTitle?: string;
}

type CountUp = {
  number?: number;
  title?: string;
};

const contexts: digitalContext[] = [
  {
    id: 1,
    title: "Your Team in the cloud",
    subTitle:
      "We Hire Best and brightest Talents to build world class technology",
  },
  {
    id: 2,
    title: "Grow more with less",
    subTitle: "We have a competitive pricing structure",
  },
  {
    id: 3,
    title: "Weekly sprint and reviews",
    subTitle:
      "Our fast review and feedback loop is designed to keep in you in the driver's seat",
  },
  {
    id: 4,
    title: "Communication First",
    subTitle: "We use modem tools and services to collaborate",
  },
];

const totalCount: CountUp[] = [
  {
    number: 20,
    title: "Tech Partners",
  },
  {
    number: 150,
    title: "Project Completed",
  },
  {
    number: 1000,
    title: "Satisfied Customers",
  },
];

const Digital_Solu: React.FC = () => {
  return (
    <section>
      <div className="container px-4 mx-auto">
        {/* Title */}
        <div className="text-center px-2 sm:px-0">
          <h1 className="text-[28px] sm:text-[34px] md:text-[48px] xl:text-[70px] font-medium font-bricol leading-9 md:leading-12 xl:leading-20 py-[40px] sm:py-[50px]">
            <img src={star} alt="" className="inline-block mr-3.5" />
            At Software Chamber,{" "}
            <span className="text-gray-400">we specialize</span> in turning
            complex challenges into elegant{" "}
            <span className="text-gray-400">digital solutions</span>{" "}
            <img src={left_arroe} alt="" className="inline-block" />
          </h1>
        </div>

        {/* Digital Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-6 xl:gap-x-12 items-center">
          <div className="md:col-span-4 xl:col-span-3">
            <div className="flex flex-col space-y-10">
              {totalCount.map((count) => (
                <div key={count.title} className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <CountUp
                      from={0}
                      to={count.number}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text font-medium text-[40px] sm:text-[50px] font-bricol"
                    />
                    <span className="font-medium text-[40px] sm:text-[50px] font-bricol">
                      +
                    </span>
                  </div>
                  <span className="text-[22px] sm:text-[26px] font-outfit text-gray-500">
                    {count.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 xl:col-span-5 flex justify-center px-4 md:px-0">
            <img
              src={digital_img}
              alt="digital solution"
              className="max-w-full h-auto"
            />
          </div>

          <div className="md:col-span-12 xl:col-span-4">
            <div className="flex flex-col gap-y-[20px]">
              {contexts.map((context) => (
                <div
                  key={context.id}
                  className="flex items-start gap-x-[16px] border-b border-[#000000]/20%"
                >
                  <div className="bg-[#27B4A3] p-[18px] rounded-full shrink-0">
                    <span className="bg-white p-[4.5px] px-[9px] rounded-full text-[#436255] font-inter font-bold">
                      {context.id}
                    </span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-[22px] sm:text-[26px] font-semibold font-bricol text-gray-600">
                      {context.title}
                    </h3>
                    <p className="font-outfit text-gray-500 text-[14px] sm:text-[16px]">
                      {context.subTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digital_Solu;
