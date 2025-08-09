import React from "react";
import img_1 from "../../assets/passion_svg/image_1.svg";
import img_2 from "../../assets/passion_svg/image_2.svg";
import img_3 from "../../assets/passion_svg/image.svg";
import img_4 from "../../assets/passion_svg/image_3.svg";
import img_5 from "../../assets/passion_svg/image_4.svg";
import img_6 from "../../assets/passion_svg/image_5.svg";
import img_7 from "../../assets/passion_svg/image_6.svg";

type marqueeContents = {
  img?: string;
  name?: string;
};

const MarqueeContent: marqueeContents[] = [
  {
    img: img_1,
    name: "Tech",
  },
  {
    img: img_2,
    name: "Health Care",
  },
  {
    img: img_3,
    name: "Developers",
  },
  {
    img: img_4,
    name: "Software",
  },
  {
    img: img_5,
    name: "Entertainment",
  },
  {
    img: img_6,
    name: "Hospitality",
  },
  {
    img: img_7,
    name: "Manufacturing ",
  },
];

const SoftwareMarquee: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-[38px]">
        {MarqueeContent.map((content) => (
          <div key={Math.random()} className="flex items-center gap-[38px]">
            <img src={content.img} alt="" className="inline-block" />
            <span className="font-dm font-semibold text-[22px] text-white">
              {content.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SoftwareMarquee;
