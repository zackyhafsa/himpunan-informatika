"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <section id="about-us" className="bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20 h-screen flex justify-center items-center">
        <div className="flex flex-wrap items-center">
          {/* Bagian Teks */}
          <motion.div
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            <h2 className="text-4xl font-bold text-red-700 mb-4">Tentang Kami</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Himpunan Mahasiswa Informatika Universitas Majalengka adalah organisasi yang bertujuan
              untuk mengembangkan potensi mahasiswa, baik di bidang akademik maupun non-akademik.
              Kami berkomitmen untuk menciptakan lingkungan yang mendukung kreativitas, inovasi, dan
              kolaborasi dalam bidang teknologi dan informatika.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Bergabunglah dengan kami untuk membangun masa depan yang lebih baik, bersama-sama
              menciptakan peluang dan berkontribusi untuk komunitas.
            </p>
          </motion.div>

          {/* Bagian Gambar dengan Grid */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants}
          >
            <div className="grid grid-cols-3 gap-4">
              {/* Grid Item 1 */}
              <motion.div
                className="col-span-2 row-span-2 bg-cover bg-center rounded-lg shadow-md"
                style={{
                  backgroundImage: "url(1.webp)",
                  width: "100%",
                  height: "300px",
                }}
                whileHover={{ scale: 1.05 }}
              ></motion.div>

              {/* Grid Item 2 */}
              <motion.div
                className="bg-cover bg-center rounded-lg shadow-md"
                style={{
                  backgroundImage: "url(2.webp)",
                  width: "100%",
                  height: "140px",
                }}
                whileHover={{ scale: 1.05 }}
              ></motion.div>

              {/* Grid Item 3 */}
              <motion.div
                className="bg-cover bg-center rounded-lg shadow-md"
                style={{
                  backgroundImage: "url(3.webp)",
                  width: "100%",
                  height: "140px",
                }}
                whileHover={{ scale: 1.05 }}
              ></motion.div>

              {/* Grid Item 4 */}
              <motion.div
                className="col-span-2 bg-cover bg-center rounded-lg shadow-md"
                style={{
                  backgroundImage: "url(4.webp)",
                  width: "100%",
                  height: "180px",
                }}
                whileHover={{ scale: 1.05 }}
              ></motion.div>

              {/* Grid Item 5 */}
              <motion.div
                className="bg-cover bg-center rounded-lg shadow-md"
                style={{
                  backgroundImage: "url(5.webp)",
                  width: "100%",
                  height: "140px",
                }}
                whileHover={{ scale: 1.05 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
