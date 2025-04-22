// src/components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12ml-[2rem]">
        {/* Left Side */}
        <div className="flex-1 ml-[6rem]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          SHARE YOUR KNOWLEDGE!<br />
            <span className="text-green-600"> - PCC -</span>
          </h1>
          <p className="text-gray-500 mt-6">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="mt-8 bg-blue-800 text-white px-6 py-3 rounded hover:bg-green-700">
            Register
          </button>
        </div>
        <div className="flex-1">
        <img
          src="/images/logo_pcc.png"
          alt="Hero illustration"
          className="w-full max-w-[200px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
