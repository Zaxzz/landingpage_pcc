// src/components/Testimoni.tsx
import React from "react";
import { PiUsersThreeLight, PiCalendarBlankLight, PiStarLight } from "react-icons/pi";
import * as motion from "motion/react-client"

const AboutUs = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/960px-FullMoon2010.jpg"
          alt="testimoni"
          className="w-full md:w-1/2"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="flex-1">
          <motion.h2
            className="text-[#0C2753] text-3xl font-bold leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="underline decoration-2 underline-offset-4">
              About Us
            </span>
            <br />
            <span className="text-[#0C2753]">Polytechnic Computer Club</span>
          </motion.h2>

          <motion.p
            className="text-[#0C2753] mt-4"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            UKM Polytechnic Computer Club yang disingkat UKM PCC merupakan salah satu Unit Kegiatan Mahasiswa di Politeknik Negeri Semarang yang sudah cukup berumur. Dalam kiprahnya UKM PCC memberikan banyak kontribusi kepada institusi POLINES sendiri lewat prestasi-prestasi yang telah diraih oleh UKM PCC.
          </motion.p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <Stat icon={<PiUsersThreeLight size={32} />} value="100" label="Anggota" />
            <Stat icon={<PiCalendarBlankLight size={32} />} value="10" label="Event" />
            <Stat icon={<PiStarLight size={32} />} value="100" label="Prestasi" />
            <Stat icon={<PiUsersThreeLight size={32} />} value="100" label="Kerja Sama" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <motion.div
    className="flex items-center gap-4"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-[#0C2753]">{icon}</div>
    <div>
      <p className="text-xl font-semibold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </motion.div>
);

export default AboutUs;
