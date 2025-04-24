import React from "react";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden pt-30" id="home">
      <svg
        className="absolute bottom-0 left-0 w-full h-[400px] z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#dbeafe"
          fillOpacity="1"
          d="M0,224L48,192C96,160,192,96,288,90.7C384,85,480,139,576,144C672,149,768,107,864,122.7C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <motion.svg
        className="absolute -bottom-10 left-0 w-full h-[600px] z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, 15, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="#bfdbfe"
          fillOpacity="0.8"
          d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,218.7C840,203,960,181,1080,186.7C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </motion.svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 ml-[2rem]">
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
            Wadah berbagi pengetahuan, pengalaman, dan inspirasi antar anggota
            untuk tumbuh bersama dalam dunia teknologi.
          </p>
          <motion.button
            className="mt-8 bg-[#0C2753] text-white px-6 py-3 rounded hover:bg-[#1c4587]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Bergabung
          </motion.button>
        </motion.div>

        <motion.div
  className="flex-1 relative flex justify-center items-center"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <motion.div
    className="absolute w-[250px] h-[250px] rounded-full border border-dashed border-[#0C2753] opacity-70"
    style={{
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      borderBottomColor: "#0C2753",
      borderRightColor: "#0C2753",
    }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <img
    src="/images/logo_pcc.png"
    alt="Hero illustration"
    className="w-full max-w-[160px] z-10"
  />
</motion.div>

      </div>
    </section>
  );
};

export default Hero;
