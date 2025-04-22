import React from "react";

const divisiData = [
  {
    label: "ADMINISTRATOR PCC",
    tahun: "2024/2025",
    isi: [
      {
        nama: "Moh Fatkhur Rahman",
        jabatan: "",
        foto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
      },
    ],
  },
  {
    label: "SEKRETARIS UMUM",
    tahun: "2024/2025",
    isi: [
      {
        nama: "Nor Aina",
        jabatan: "",
        foto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
      },
    ],
  },
  {
    label: "SEKRETARIS",
    tahun: "",
    isi: [
      {
        nama: "Syifa Nur Hamida",
        jabatan: "SEKRETARIS 1",
        foto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
      },
      {
        nama: "Atina Nur Fahmi",
        jabatan: "SEKRETARIS 2",
        foto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
      },
      {
        nama: "Khalisa Dian R.",
        jabatan: "SEKRETARIS 3",
        foto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
      },
    ],
  },
  {
    label: "BENDAHARA",
    tahun: "",
    isi: [
      {
        nama: "Naila Karimatul Ulya",
        jabatan: "BENDAHARA 1",
        foto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
      },
      {
        nama: "Aina Azzahra",
        jabatan: "BENDAHARA 2",
        foto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
      },
      {
        nama: "Syakura Wijdan L.",
        jabatan: "BENDAHARA 3",
        foto:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg",
      },
    ],
  },
];

const Divisi = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="tabs tabs-lift tabs-bordered flex flex-col space-y-4">
        {divisiData.map((divisi, index) => (
          <div key={index}>
            <input
              type="radio"
              name="tab-divisi"
              className="tab"
              aria-label={divisi.label}
              defaultChecked={index === 0}
            />
            <div className="tab-content bg-base-100 border-base-300 p-6 rounded-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">{divisi.label}</h2>
                {divisi.tahun && (
                  <p className="text-sm text-gray-500">{divisi.tahun}</p>
                )}
              </div>

              <div
                className={`grid gap-6 ${
                  divisi.isi.length === 1
                    ? "place-items-center"
                    : "lg:grid-cols-2"
                }`}
              >
                {divisi.isi.map((orang, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center bg-white p-4 rounded-xl shadow transition duration-300 hover:shadow-md ${
                      divisi.isi.length === 1
                        ? "lg:flex-col"
                        : (index + i) % 2 === 0
                        ? "lg:flex-row lg:text-left"
                        : "lg:flex-row-reverse lg:text-right"
                    }`}
                  >
                    <img
                      src={orang.foto}
                      alt={orang.nama}
                      className="w-40 h-40 object-cover rounded-full border-4 border-base-300 shadow-md mb-4 lg:mb-0 lg:mx-6"
                    />
                    <div className="space-y-1">
                      {orang.jabatan && (
                        <p className="font-semibold text-lg text-black">
                          {orang.jabatan}
                        </p>
                      )}
                      <p className="text-xl text-black">{orang.nama}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Divisi;
