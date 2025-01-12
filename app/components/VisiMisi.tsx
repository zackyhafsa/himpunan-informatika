"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VisiMisi = () => {
  const ref = useRef(null); // Referensi untuk komponen
  const isInView = useInView(ref, { once: true }); // Lacak apakah komponen sudah masuk ke viewport

  return (
    <motion.div
      ref={ref} // Pasang referensi ke komponen
      className="my-5 mx-24 h-screen flex justify-center items-center max-md:mx-10 max-md:mt-20"
      initial={{ opacity: 0, y: 50 }} // Animasi awal: opacity 0 dan geser ke bawah 50px
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animasi saat masuk viewport: opacity 1 dan geser ke posisi awal
      transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan easing animasi
    >
      <div>
        <div className="leading-3">
          <h1 className="text-center font-semibold">Visi Misi</h1>
          <h1 className="text-center font-bold text-3xl text-red-700">
            Himpunan Mahasiswa Informatika
          </h1>
        </div>
        <div className="flex justify-center gap-10 mx-10 max-lg:flex-col max-md:mx-0">
          <motion.div
            className="w-1/2 max-lg:w-full"
            initial={{ opacity: 0, x: -50 }} // Animasi awal: opacity 0 dan geser ke kiri 50px
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Animasi saat masuk viewport: opacity 1 dan geser ke posisi awal
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Durasi, delay, dan easing animasi
          >
            <h2 className="font-semibold text-2xl mt-10 border-b-4 border-red-700 inline-block mb-5">
              Visi
            </h2>
            <p className="text-justify">
              Menjadikan Himpunan Mahasiswa Informatika sebagai wadah yang insklusif dan inovatif
              untuk mengembangkan minat bakat, serta potensi mahasiswa, guna menciptakan generasi
              informatika yang unggul dan berkontribusi dalam dunia teknologi.
            </p>
          </motion.div>
          <motion.div
            className="w-1/2 flex flex-col gap-2 max-lg:w-full"
            initial={{ opacity: 0, x: 50 }} // Animasi awal: opacity 0 dan geser ke kanan 50px
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Animasi saat masuk viewport: opacity 1 dan geser ke posisi awal
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} // Durasi, delay, dan easing animasi
          >
            <h2 className="font-semibold text-2xl mt-10 border-b-4 border-red-700 inline-block w-14  mb-5 max-md:mt-0">
              Misi
            </h2>
            <motion.div
              className="flex gap-5 items-center "
              initial={{ opacity: 0, y: 20 }} // Animasi awal: opacity 0 dan geser ke bawah 20px
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animasi saat masuk viewport: opacity 1 dan geser ke posisi awal
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} // Durasi, delay, dan easing animasi
            >
              <p className="h-10 w-10 bg-red-700 text-white flex justify-center items-center rounded-full flex-shrink-0">
                1
              </p>
              <p>Meningkatkan jiwa kepemimpinan dan kebersamaan.</p>
            </motion.div>
            <motion.div
              className="flex gap-5 items-center"
              initial={{ opacity: 0, y: 20 }} // Animasi awal: opacity 0 dan geser ke bawah 20px
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animasi saat masuk viewport: opacity 1 dan geser ke posisi awal
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} // Durasi, delay, dan easing animasi
            >
              <p className="h-10 w-10 bg-red-700 text-white flex justify-center items-center rounded-full flex-shrink-0">
                2
              </p>
              <p>Mengembangkan keterampilan soft skill dan hard skill.</p>
            </motion.div>
            <motion.div
              className="flex gap-5 items-center"
              initial={{ opacity: 0, y: 20 }} // Animasi awal: opacity 0 dan geser ke bawah 20px
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animasi saat masuk viewport: opacity 1 dan geser ke posisi awal
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }} // Durasi, delay, dan easing animasi
            >
              <p className="h-10 w-10 bg-red-700 text-white flex justify-center items-center rounded-full flex-shrink-0">
                3
              </p>
              <p>Meningkatkan rasa kekeluargaan dan kerja sama dengan civitas akademik.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisiMisi;
