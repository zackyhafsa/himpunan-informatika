"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="px-[5%] flex justify-center items-center w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center max-md:flex-col">
        <div className="w-[35rem] max-md:w-auto max-md:mt-48">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-semibold text-xl max-md:text-lg"
          >
            Selamat Datang{" "}
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-bold text-5xl block"
            >
              Himpunan Mahasiswa{" "}
              <motion.span
                initial={{ x: -100, opacity: 0, rotate: -2 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="bg-red-700 text-white block absolute -rotate-2 px-3 "
              >
                Informatika
              </motion.span>
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mb-5 mt-14 text-justify"
          >
            <strong>Himpunan Mahasiswa Informatika (HMIF)</strong> adalah wadah bagi mahasiswa
            informatika untuk berkembang, berinovasi, dan berkontribusi dalam bidang teknologi
            informasi. Mari bersama-sama wujudkan impian dan kontribusi nyata di dunia digital! 🚀
          </motion.p>
          <motion.a
            href="/struktural"
            className="bg-red-700 px-10 py-3 rounded-md text-white font-semibold hover:bg-red-800 transition-all duration-300 ease-in-out"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            Jelajahi
          </motion.a>
        </div>
        <motion.img
          src="kahim-wakahim.png"
          alt=""
          className="w-[30rem] max-md:w-96"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </div>
    </motion.div>
  );
};

export default Hero;
