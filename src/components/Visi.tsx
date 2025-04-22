// src/components/FooterSection.tsx
import React from "react";

const Visi = () => {
  return (
    <section className="bg-gray-50 py-20">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      
      <div className="flex-1">
        <h2 className="text-[#0C2753] text-2xl font-semibold leading-relaxed">
          Visi <br />
          <span className="text-[#0C2753]">Polytechnic Computer Club</span>
        </h2>
        <p className="text-[#0C2753] mt-4">
          Menjadikan UKM PCC sebagai wadah yang inovatif, adaptif, solutif, serta mengamalkan 7-layers PCC sebagai landasan berorganisasi.
        </p>
        <div className="mt-6">
          <button className="bg-[#0C2753] text-white px-6 py-3 rounded-lg hover:bg-blue-800">
            Bergabung dengan Kami
          </button>
        </div>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg"
        alt="footer design"
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
    </div>
  </section>
  
  
  );
};

export default Visi;
