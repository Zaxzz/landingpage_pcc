'use client'

import React from 'react'

const Kontak = () => {
  return (
    <section className="py-20 bg-white" id="kontak">
      <div className="container mx-auto px-4">
        {/* Teks judul dan deskripsi di luar box */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#0C2753]">Hubungi Kami</h2>
          <p className="text-lg max-w-xl mx-auto text-[#0C2753] ">
            Ada pertanyaan atau butuh informasi lebih lanjut? 
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-[#0C2753] p-8 rounded-box shadow w-full max-w-xl">
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
                <label htmlFor="email" className="block text-sm font-medium mb-1">
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
                <label htmlFor="pesan" className="block text-sm font-medium mb-1">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  placeholder="Tulis pesan Anda di sini"
                  className="textarea textarea-bordered w-full h-32"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full bg-blue-700  hover:bg-blue-500">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kontak
