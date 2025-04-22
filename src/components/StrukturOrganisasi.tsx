'use client'

import React from "react"
import * as motion from "motion/react-client"
const articles = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
    title: "ADMINISTRATOR PCC 2024/2025",
    link: "#",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
    title: "SEKRETARIS UMUM 2024/2025",
    link: "#",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
    title: "PENELITIAN DAN PENGEMBANGAN 2024/2025",
    link: "#",
  },
]

const StrukturOrganisasi = () => {
  return (
    <section className="bg-white py-20" id="struktur">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Struktur Organisasi
        </motion.h2>

        <motion.p
          className="text-gray-500 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Susunan struktur organisasi PCC dibuat agar setiap divisi dapat berkolaborasi dengan baik dan menjalankan tugasnya sesuai tanggung jawab demi tercapainya tujuan bersama.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-xl shadow hover:shadow-md overflow-hidden transition"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                <a href={article.link} className="text-green-600 text-sm mt-3 inline-block hover:underline">
                  Readmore →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StrukturOrganisasi
