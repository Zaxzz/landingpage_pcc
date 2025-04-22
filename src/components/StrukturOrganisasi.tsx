// src/components/BlogSection.tsx
import React from "react";

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
];

const StrukturOrganisasi = () => {
  return (
    <section className="bg-white py-20" id="struktur">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Struktur Organisasi</h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
  Susunan struktur organisasi PCC dibuat agar setiap divisi dapat berkolaborasi dengan baik dan menjalankan tugasnya sesuai tanggung jawab demi tercapainya tujuan bersama.
</p>


        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow hover:shadow-md overflow-hidden transition">
              <img src={`${article.image}`} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
                <a href={article.link} className="text-green-600 text-sm mt-3 inline-block hover:underline">
                  Readmore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrukturOrganisasi;
