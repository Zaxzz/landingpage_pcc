'use client'

import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import * as motion from "motion/react-client"
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
}

const Misi = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg"
          alt="Ilustrasi Misi"
          className="w-full md:w-1/2 rounded-xl shadow-md"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="flex-1"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold leading-relaxed text-[#0C2753]">
            <span className="inline-block bg-[#0C2753] px-4 py-2 rounded-none text-white">
              Misi
            </span>
            <br />
            <span className="text-[#0C2753]">
              Polytechnic Computer Club
            </span>
          </h2>

          <ul className="mt-6 space-y-4 text-gray-600">
            {[
              "Menerapkan 7-Layers PCC dalam diri tiap anggota dalam setiap langkah.",
              "Membentuk SDM yang kritis dan inovatif, serta dapat menyelesaikan masalah secara efektif.",
              "Mengembangkan pengetahuan dan portofolio dalam bidang teknologi informasi dan komputer.",
              "Menanamkan jiwa loyalitas dan integritas dalam tiap anggota.",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 w-5 h-5 mt-1.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Misi
