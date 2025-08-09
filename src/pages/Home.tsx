import Service from "../components/ui/Service";
import Digital_Solu from "../components/ui/Digital_Solu";
import Hero from "../components/ui/Hero";
import Navbar from "../components/ui/Navbar";
import React from "react";
import Software from "../components/ui/Software";
import Passion from "../components/ui/Passion";
import Technology_Pattern from "../components/ui/Technology_Pattern";

const Home: React.FC = () => {
  return (
    <>
      <div className="relative w-full bg-primary overflow-hidden">
        {/* <div className="absolute right-0 top-1/4 w-[300px] h-[300px] rounded-full bg-[#00ffe0] opacity-20 blur-[150px]"></div> */}
        <div className="container relative">
          <div className="absolute right-0 top-1/4 w-[120px] h-[500px] rounded-full bg-[#00ffe0] opacity-20 blur-[50px] transform translate-x-[50px] -translate-y-[200px] rotate-45"></div>
          <div className="absolute right-0 top-1/4 w-[120px] h-[500px] rounded-full bg-[#00ffe0] opacity-20 blur-[50px] transform translate-x-[40px] translate-y-[100px] rotate-45"></div>
          <div className="absolute inset-0 w-[120px] h-[500px] bg-[#00ffe0]/60 opacity-30 blur-[50px] rounded-full z-0 -rotate-45 -translate-x-[50px] -translate-y-[200px]"></div>
          <div className="absolute inset-0 w-[120px] h-[400px] bg-[#00ffe0]/60 opacity-30 blur-[50px] rounded-full z-0 -rotate-45 transform translate-x-[20px] translate-y-[230px]"></div>
        </div>
        <div className="relative z-10 text-white text-4xl p-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Digital_Solu />
      <Service />
      <Software />
      <Passion />
      <Technology_Pattern />
    </>
  );
};

export default Home;
