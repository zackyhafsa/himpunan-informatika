"use client";

import { motion } from "framer-motion";
import Card, { LargeCard } from "./Card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div className="bg-red-700 text-white py-4" variants={itemVariants}>
        <p className="text-center">Kabinet</p>
        <h1 className="text-center font-bold text-3xl">Mahavira Vidyatara</h1>
      </motion.div>

      <motion.div className="px-[5%] my-5 max-lg:px-[2%]" variants={itemVariants}>
        <motion.h1
          className="text-center my-5 text-slate-800 font-bold text-2xl"
          variants={itemVariants}
        >
          BPH <span className="block font-medium text-base">Badan Pengurus Harian</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-4 gap-5 px-[5%] max-lg:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div className="col-span-2" variants={itemVariants}>
            <LargeCard position="Ketua Himpunan" name="Aep Saepuloh" background="bph/aep.webp" />
          </motion.div>
          <motion.div className="col-span-2 " variants={itemVariants}>
            <LargeCard
              position="Wakil Ketua Himpunan"
              name="Desfi Silvia Aros"
              background="bph/desfi.webp"
            />
          </motion.div>

          {/* Animasi untuk Card */}
          {[
            { position: "Sekretaris 1", name: "Mira Yunisa", background: "bph/mira.webp" },
            { position: "Sekretaris 2", name: "Haura Zahra", background: "bph/haura.webp" },
            { position: "Bendahara 1", name: "Hegar Zalekania", background: "bph/hegar.webp" },
            { position: "Bendahara 2", name: "Retno Sari Sirotujanah", background: "bph/retno.webp" },
          ].map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card position={member.position} name={member.name} background={member.background} />
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          className="font-bold text-center my-5 text-slate-800 text-2xl"
          variants={itemVariants}
        >
          Litbang
          <span className="block text-base font-medium">Penelitian dan Pengembangan</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-5 gap-5 max-lg:grid-cols-2"
          variants={containerVariants}
        >
          <motion.div className="col-span-2" variants={itemVariants}>
            <LargeCard position="Koordinator" name="Abrar Wahid" background="abrar.jpg" />
          </motion.div>

          {/* Animasi untuk anggota Litbang */}
          {[
            { name: "Anis Agustin", background: "anis.jpg" },
            { name: "Ayip Luthfy Firmansyah", background: "ayip.jpg" },
            { name: "Zacky Hafsari", background: "zacky.jpg" },
            { name: "Puput Risna", background: "puput.jpg" },
            { name: "Wildan Zhilal Manafi", background: "wildan.jpg" },
            { name: "Pandu Yassar Alfaros", background: "pandu.jpg" },
            { name: "Rintan Nurhaliza", background: "rintan.jpg" },
            { name: "Khoerul Anwar", background: "khoerul.jpg" },
          ].map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card position="Anggota" name={member.name} background={member.background} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
