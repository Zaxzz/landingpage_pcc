import React from "react";
import { PiUsersThreeLight, PiGlobeLight, PiChatsCircleLight } from "react-icons/pi";
import * as motion from "motion/react-client"
const Event = () => {
  return (
    <section className="bg-[#0C2753] py-20" id="event">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-1xl font-bold text-white mb-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Event Unggulan PCC
        </motion.h2>

        <motion.p
          className="text-lg text-white mb-12 max-w-2xl mx-auto"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Dari pelatihan dasar hingga kompetisi tingkat nasional, PCC hadirkan kegiatan inspiratif untuk generasi teknologi.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="flex justify-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<PiUsersThreeLight size={32} className="text-white" />}
              title="Training Basic"
              desc="Program pelatihan untuk mengenalkan tiga bidang utama PCC kepada calon anggota baru. Materi disampaikan secara bertahap dan menyenangkan."
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}  
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<PiGlobeLight size={32} className="text-white" />}
              title="PCC Class"
              desc="Kelas lanjutan dari Training Basic. Berisi pembahasan materi teknologi dan IT yang lebih mendalam dan praktikal untuk mahasiswa."
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={<PiChatsCircleLight size={32} className="text-white" />}
              title="Techcomfest"
              desc="Kompetisi tingkat nasional untuk pelajar dan mahasiswa. Ajang untuk berinovasi, berkolaborasi, dan unjuk kreativitas di bidang teknologi."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
    <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#0C2753] mx-auto">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mt-4">{title}</h3>
    <p className="text-sm text-gray-500 mt-2">{desc}</p>
  </div>
);

export default Event;
