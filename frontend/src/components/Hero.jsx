import React from "react";

const Hero = () => {
  return (
    <div className="flex mx-[110px] my-20 justify-center text-white">
      <div className="text-box w-[60%] h-[70vh] p-10">
        <p className="text-7xl font-[font1] tracking-tighter">
          Smart Notes, Smarter Summaries – Your Ideas, Simplified!
        </p>
        <p className="text-md mt-5 text-xl tracking-wide font-[font1]">Smart Notes captures your ideas and generates instant AI summaries. Stay organized, retrieve notes easily, and focus on what matters!</p>
        <div className="flex gap-5 text-2xl font-semibold">
        <button className="py-2 px-10 bg-[#FF734E] text-white rounded-3xl mt-7 tracking-tighter">Learn More</button>
        <button className="py-2 px-10 bg-transparent border-1 border-[#FF734E] hover:bg-white text-[#FF734E] text-whitek rounded-3xl mt-7 tracking-tighter">Get Started</button>
        </div>
       
      </div>
      <div className="image-box  w-[60%] h-[70vh] ">
        <div className="img absolute right-0 top-35 ">
          <img src="https://contactify.ai/CompImage/SecondSecImage.svg" alt="" className="h-[600px] mr-[90px]"/>
        </div>

      </div>
    </div>
  );
};

export default Hero;
