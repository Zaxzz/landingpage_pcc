'use client'

import React from "react"
import Image from "next/image"
import * as motion from "motion/react-client"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
}

const strukturData = [
  {
    jabatan: "ADMINISTRATOR PCC",
    nama: "Moh Fatkhur Rahman",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
  },
  {
    jabatan: "SEKRETARIS UMUM",
    nama: "Nor Aina",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
  },
  {
    jabatan: "PENELITIAN DAN PENGEMBANGAN",
    nama: "KOORDINATOR LITBANG\nHussain Tamam Gucci Al Fauzan",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
  },
  {
    jabatan: "SEKRETARIS",
    nama: "SEKRETARIS 1\nSyifa Nur Hamida",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
  },
]

export default function Struktur() {
  return (
    <section className="bg-[#f2f5fc] py-16 px-4 text-center" id="struktur">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-2xl font-bold text-[#0C2753] mb-2">Struktur Organisasi</h2>
          <p className="text-[#0C2753] mb-10">
            Susunan struktur organisasi PCC dibuat agar setiap divisi dapat berkolaborasi dengan baik dan menjalankan tugasnya sesuai tanggung jawab demi tercapainya tujuan bersama.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {strukturData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md p-6 text-left rounded-md"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
            >
              <div className="flex items-start gap-4">
                <Image src={item.img} alt={item.jabatan} width={60} height={60} className="rounded-full object-cover" />
                <div>
                  <h3 className="text-[#2353a2] font-semibold whitespace-pre-line">{item.jabatan}</h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{item.nama}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-end"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={strukturData.length + 1}
        >
          <button className="bg-[#0C2753] hover:bg-[#1c4587] text-white text-sm font-medium py-2 px-6 rounded-md transition">
            Lihat Detail Anggota
          </button>
        </motion.div>
      </div>
    </section>
  )
}
