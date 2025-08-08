import React from "react";
import img_1 from "../../assets/card_img/card_img_1.svg";
// import img_2 from "../../assets/card_img/card_img_2.svg";
// import img_3 from "../../assets/card_img/card_img_3.svg";

interface Cards {
  title?: string;
  subTitle?: string;
  cardBtn?: string;
  img?: string;
}

const cards: Cards[] = [
  {
    title: "Software Service Solutions",
    subTitle: "Plan, track, and manage projects with precision tools.",
    cardBtn: "Discover",
    img: img_1,
  },
  //   {
  //     title: "Our Professional Trainig Platform",
  //     subTitle: "Stream and broadcast videos in crystal-clear quality.",
  //     cardBtn: "Discover",
  //     img: img_2,
  //   },
  //   {
  //     title: "Software Service Solutions",
  //     subTitle: "Plan, track, and manage projects with precision tools.",
  //     cardBtn: "Discover",
  //     img: img_3,
  //   },
];

const Hero_cards: React.FC = () => {
  return (
    <div>
      {cards.map((card) => (
        <div key={Math.random()} className="">
          <div className="flex items-center justify-between w-full mt-8">
            <div className="">
              <img src={card.img} alt="" className="" />
            </div>
            <div className="flex flex-col gap-y-1 md:gap-y-3 max-w-[300px] font-rubik font-medium text-[18px] md:text-[22px] lg:text-[32px]">
              <h2 className="">{card.title}</h2>
              <p className="text-[12px]">{card.subTitle}</p>
              <button>{card.cardBtn}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero_cards;
