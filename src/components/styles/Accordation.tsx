import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Accordation: React.FC = () => {
  type AccordationDetails = {
    id: number;
    question: string;
    answer: string;
  };

  const allData: AccordationDetails[] = [
    {
      id: 1,
      question: "What software development services does your company offer?",
      answer:
        "At Software Chamber, we specialize in end-to-end software development services designed to transform your digital vision into reality. Our team delivers custom web and mobile applications, scalable e-commerce platforms, and intuitive UI/UX designs.",
    },
    {
      id: 2,
      question: "What industries do you specialize in?",
      answer:
        "We work across industries including fintech, e-commerce, healthcare, education, logistics, and more — always adapting to unique business needs.",
    },
    {
      id: 3,
      question: "What sets your company apart from the competition?",
      answer:
        "We stand apart through our relentless focus on precision engineering and client-centric innovation. Unlike agencies that offer generic solutions, we combine cutting-edge technology with deep industry insights to deliver software that anticipates future needs.",
    },
    {
      id: 4,
      question: "Is my project idea and information kept confidential?",
      answer:
        "We guard your project confidentiality with strict NDAs, encryption, and limited-access protocols. Your intellectual property remains exclusively yours — always.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="py-8 lg:py-30 ">
      {allData.map((item, index) => (
        <div
          key={item.id}
          className={`transition-colors ${
            index !== allData.length - 1 ? "border-b border-gray-300" : ""
          }`}
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full flex justify-between items-center py-4 text-left font-medium text-lg sm:text-xl lg:text-2xl"
          >
            <span className="pr-4 font-bricol">{item.question}</span>
            <span className="flex-shrink-0">
              {activeId === item.id ? (
                <FiChevronUp className="bg-teal-400 text-white w-8 h-8 sm:w-10 sm:h-10 p-1.5 sm:p-2 rounded-full" />
              ) : (
                <FiChevronDown className="bg-[#383838] text-white w-8 h-8 sm:w-10 sm:h-10 p-1.5 sm:p-2 rounded-full" />
              )}
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              activeId === item.id
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-4 text-gray-600 text-base sm:text-lg leading-relaxed font-outfit max-w-[1000px]">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordation;
