'use client'

import React from 'react'
import * as motion from "motion/react-client"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Kontak = () => {
  return (
    <section className="py-20 px-14 bg-white" id="kontak">
      <div className="container mx-auto px-4">
        {/* Judul */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#0C2753]">Hubungi Kami</h2>
          <p className="text-lg max-w-xl mx-auto text-[#0C2753]">
            Ada pertanyaan atau butuh informasi lebih lanjut? Kami siap membantu!
          </p>
        </motion.div>

        {/* Form + Info */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.div
            className="bg-[#0C2753] p-8 rounded-xl shadow w-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium mb-1 text-white">
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  placeholder="Masukkan nama Anda"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Masukkan email Anda"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block text-sm font-medium mb-1 text-white">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  placeholder="Tulis pesan Anda di sini"
                  className="textarea textarea-bordered w-full h-32"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full bg-[#1c4587] hover:bg-blue-500"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          {/* Map + Info Kontak */}
          <motion.div
            className="w-full space-y-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63358.86518815107!2d110.3971792!3d-7.0245878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c5df41c087f%3A0xc02fae0a2aa06f4b!2sPoliteknik%20Negeri%20Semarang!5e0!3m2!1sen!2sid!4v1713920000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>

            {/* Info Kontak */}
            <div className="text-[#0C2753] space-y-2">
              <p><strong>Alamat:</strong> Jl. Prof. Sudarto, Tembalang, Semarang</p>
              <p><strong>Email:</strong> info@pcc.or.id</p>
              <p><strong>WhatsApp:</strong> 0812-3456-7890</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Kontak
