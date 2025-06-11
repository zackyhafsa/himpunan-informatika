"use client";

import { motion } from "framer-motion";
import Card from "./Card";

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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <motion.div className="px-[5%] my-5 max-lg:px-[2%]" variants={itemVariants}>
        <motion.h1
          className="text-center my-5 text-slate-800 font-bold text-2xl"
          variants={itemVariants}
        >
          BPH <span className="block font-medium text-base">Badan Pengurus Harian</span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-5 px-[5%] justify-center mb-5"
          variants={containerVariants}
        >
          {[
            { position: "Ketua Himpunan", name: "Aep Saepuloh", background: "bph/aep.webp" },
            {
              position: "Wakil Ketua Himpunan",
              name: "Desfi Silvia Aros",
              background: "bph/desfi.webp",
            },
          ].map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card position={member.position} name={member.name} background={member.background} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-5 px-[5%] justify-center"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[
            { position: "Sekretaris 1", name: "Mira Yunisa", background: "bph/mira.webp" },
            { position: "Sekretaris 2", name: "Haura Zahra", background: "bph/haura.webp" },
            { position: "Bendahara 1", name: "Hegar Zalekania", background: "bph/hegar.webp" },
            {
              position: "Bendahara 2",
              name: "Retno Sari Sirotujanah",
              background: "bph/retno.webp",
            },
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
          className="flex flex-wrap gap-5 justify-center"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[
            { position: "Koordinator", name: "Abrar Wahid", background: "abrar.jpg" },
            { position: "Anggota", name: "Anis Agustin", background: "anis.jpg" },
            { position: "Anggota", name: "Ayip Luthfy Firmansyah", background: "ayip.jpg" },
            { position: "Anggota", name: "Zacky Hafsari", background: "zacky.jpg" },
            { position: "Anggota", name: "Puput Risna", background: "puput.jpg" },
            { position: "Anggota", name: "Wildan Zhilal Manafi", background: "wildan.jpg" },
            { position: "Anggota", name: "Pandu Yassar Alfaros", background: "pandu.jpg" },
            { position: "Anggota", name: "Rintan Nurhaliza", background: "rintan.jpg" },
            { position: "Anggota", name: "Khoerul Anwar", background: "khoerul.jpg" },
          ].map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card position={member.position} name={member.name} background={member.background} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <hr />
      <h1 className="text-center text-3xl font-bold my-20">
        Coming <span className="text-red-700">Soon</span>... 👋
      </h1>
    </motion.div>
  );
};

export default About;
