"use client";

import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <motion.div
      className="py-10 px-5 mx-[10%] rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="leading-3">
        <h1 className="text-center font-semibold">BPH & Departemen</h1>
        <h1 className="text-center font-bold text-3xl text-red-700">
          Himpunan Mahasiswa Informatika
        </h1>
      </div>
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-80 h-72 rounded-md overflow-hidden border bg-white shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-52"
            style={{ backgroundImage: "url('bph.jpg')" }}
          ></div>
          <div className="p-2 leading-3 my-auto">
            <h1 className="font-bold text-red-700 text-xl">BPH</h1>
            <p>Badan Pengurus Harian</p>
          </div>
        </motion.div>
        <motion.div
          className="w-80 h-72 rounded-md overflow-hidden border bg-white shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-52"
            style={{ backgroundImage: "url('litbang.jpg')" }}
          ></div>
          <div className="p-2 leading-3 my-auto">
            <h1 className="text-sm font-semibold leading-3">
              Departemen <span className="font-bold text-red-700 text-xl block">Litbang</span>
            </h1>
            <p className="text-sm">Penelitian dan Pengembangan</p>
          </div>
        </motion.div>
        <motion.div
          className="w-80 h-72 rounded-md overflow-hidden border bg-white shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-52"
            style={{ backgroundImage: "url('external.jpg')" }}
          ></div>
          <div className="p-2 leading-3 my-auto">
            <h1 className="text-sm font-semibold leading-3">
              Departemen <span className="font-bold text-red-700 text-xl block">External</span>
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="w-80 h-72 rounded-md overflow-hidden border bg-white shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-52"
            style={{ backgroundImage: "url('danus.jpg')" }}
          ></div>
          <div className="p-2 leading-3 my-auto">
            <h1 className="text-sm font-semibold leading-3">
              Departemen <span className="font-bold text-red-700 text-xl block">Danus</span>
            </h1>
            <p className="text-sm">Dana Usaha</p>
          </div>
        </motion.div>
        <motion.div
          className="w-80 h-72 rounded-md overflow-hidden border bg-white shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div
            className="bg-cover bg-center bg-no-repeat w-full h-52"
            style={{ backgroundImage: "url('kominfo.jpg')" }}
          ></div>
          <div className="p-2 leading-3 my-auto">
            <h1 className="text-sm font-semibold leading-3">
              Departemen <span className="font-bold text-red-700 text-xl block">Kominfo</span>
            </h1>
            <p className="text-sm">Komunikasi dan Informasi</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
