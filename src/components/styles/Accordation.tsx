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
        "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.",
    },
    {
      id: 3,
      question: "What sets your company apart from the competition?",
      answer:
        "At Software Chamber, we stand apart through our relentless focus on precision engineering and client-centric innovation. Unlike agencies that offer generic solutions, we combine cutting-edge technology with deep industry insights to deliver software that not only meets your requirements but anticipates future needs.",
    },
    {
      id: 4,
      question: "Is my project idea and information kept confidential?",
      answer:
        "At Software Chamber, we guard your project confidentiality with the highest standards. From the moment you share your idea, we enforce strict NDAs, implement end-to-end encryption, and restrict access to only essential team members. Your intellectual property remains exclusively yours—we never retain rights to your concepts or deliverables.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(3);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="py-8 lg:py-30">
      {allData.map((item, index) => (
        <div
          key={item.id}
          className={`${
            index !== allData.length - 1 ? "border-b border-gray-300" : ""
          }`}
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full flex justify-between items-center py-4 text-left text-lg font-medium font-bricol text-[20px] lg:text-[34px]"
          >
            {item.question}
            {activeId === item.id ? (
              <FiChevronUp className="bg-teal-400 text-white w-[50px] h-[50px] text-2xl rounded-full cursor-pointer" />
            ) : (
              <FiChevronDown className=" bg-[#383838] text-white w-[50px] h-[50px] rounded-full text-2xl cursor-pointer" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeId === item.id
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 text-gray-600 font-outfit max-w-[1000px] mb-10">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordation;
