// src/components/Hero.tsx
import React from "react";
import * as motion from "motion/react-client"

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 ml-[2rem]">
        <motion.div
          className="flex-1 ml-[6rem]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C2753] leading-tight">
            SHARE YOUR KNOWLEDGE!<br />
            <span className="text-[#0C2753]"> - PCC -</span>
          </h1>
          <p className="text-[#0C2753] mt-6">
            Wadah berbagi pengetahuan, pengalaman, dan inspirasi antar anggota untuk tumbuh bersama dalam dunia teknologi.
          </p>
          <motion.button
            className="mt-8 bg-[#0C2753] text-white px-6 py-3 rounded hover:bg-blue-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Bergabung
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/logo_pcc.png"
            alt="Hero illustration"
            className="w-full max-w-[200px] mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
