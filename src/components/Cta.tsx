// src/components/Cta.tsx
import React from "react";

const Cta = () => {
  return (
    <section className="bg-green-600 py-20 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="bg-white text-green-600 px-6 py-2 rounded-md mt-4 hover:bg-gray-100 transition">
          Get a Demo →
        </button>
      </div>
    </section>
  );
};

export default Cta;
