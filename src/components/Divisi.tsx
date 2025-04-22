// src/components/Clients.tsx
import React from "react";

const Divisi = () => {
  return (
    <section className="bg-[#0C2753] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-white font-bold text-3xl">Divisi</h2>
        <p className="text-white mt-2">
          Berbagai divisi yang ada di Polytechnic Computer Club
        </p>

        {/* Tombol divisi */}
        <div className="flex justify-center mt-10">
          <div className="flex justify-between w-full max-w-2xl">
            <button className="flex-1 bg-blue-800 hover:bg-blue-800 text-white font-bold py-2 mx-2 rounded text-center">
              Software
            </button>
            <button className="flex-1 bg-blue-800 hover:bg-blue-800 text-white font-bold py-2 mx-2 rounded text-center">
              Multimedia
            </button>
            <button className="flex-1 bg-blue-800 hover:bg-blue-800 text-white font-bold py-2 mx-2 rounded text-center">
              Network
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisi;
