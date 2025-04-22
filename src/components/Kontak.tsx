'use client'

import React from 'react'

const Kontak = () => {
  return (
    <section className="py-20 bg-base-200" id="kontak">
      <div className="container mx-auto px-4">
        {/* Teks judul dan deskripsi di luar box */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-base-content text-lg max-w-xl mx-auto">
            Ada pertanyaan atau butuh informasi lebih lanjut? Silakan isi formulir di bawah ini.
          </p>
        </div>

        {/* Box form */}
        <div className="flex justify-center">
          <div className="bg-base-100 p-8 rounded-box shadow w-full max-w-xl">
            <form className="space-y-6">
              {/* Nama */}
              <div>
                <label htmlFor="nama" className="block text-sm font-medium mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  placeholder="Masukkan nama Anda"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
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

              {/* Pesan */}
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

              {/* Tombol Submit */}
              <button type="submit" className="btn btn-primary w-full">
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
