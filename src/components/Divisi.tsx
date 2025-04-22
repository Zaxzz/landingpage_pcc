'use client'

import React from "react"
import * as motion from "motion/react-client"
const Divisi = () => {
  return (
    <section className="bg-[#0C2753] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-white font-bold text-3xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Divisi
        </motion.h2>

        <motion.p
          className="text-white mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Berbagai divisi yang ada di Polytechnic Computer Club
        </motion.p>

        <div className="flex justify-center mt-10">
          <div className="flex justify-between w-full max-w-2xl">
            {["Software", "Multimedia", "Network"].map((name, i) => (
              <motion.button
                key={name}
                className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 mx-2 rounded text-center transition"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.2 }}
              >
                {name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Divisi
