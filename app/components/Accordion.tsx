"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Accordion = () => {
  const faqItems = [
    {
      question: "Apa itu Himpunan Mahasiswa Informatika (HMIF)?",
      answer:
        "HMIF adalah organisasi mahasiswa yang bertujuan untuk mengembangkan potensi mahasiswa informatika, baik dalam bidang akademik, soft skills, maupun kegiatan sosial.",
    },
    {
      question: "Apa saja kegiatan yang diadakan oleh HMIF?",
      answer:
        "HMIF mengadakan berbagai kegiatan seperti seminar teknologi, pelatihan pemrograman, lomba desain web, hingga acara sosial seperti bakti sosial dan donor darah.",
    },
    {
      question: "Bagaimana cara bergabung dengan HMIF?",
      answer:
        "Anda dapat bergabung dengan HMIF melalui pendaftaran anggota baru yang biasanya dibuka di awal semester. Informasi pendaftaran akan diumumkan melalui media sosial dan website resmi kami.",
    },
    {
      question: "Apakah HMIF terbuka untuk mahasiswa non-informatika?",
      answer:
        "Meskipun fokus utama adalah mahasiswa informatika, beberapa kegiatan kami terbuka untuk mahasiswa dari jurusan lain. Informasi ini akan dicantumkan dalam pengumuman setiap acara.",
    },
    {
      question: "Siapa yang bisa saya hubungi jika memiliki pertanyaan lebih lanjut?",
      answer:
        "Anda dapat menghubungi kami melalui email di email@hmif.ac.id atau melalui media sosial kami di Instagram: @hmif_official.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("accordion-container");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.div
      id="accordion-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-[10%] flex items-center h-screen max-md:flex-col max-md:px-[5%] max-md:gap-5 max-md:h-full max-md:my-10"
    >
      <div className="w-2/5 space-y-4 max-md:w-full">
        <h1 className="font-bold text-4xl">Ada pertanyaan? Kami Menjawab</h1>
        <p className="text-gray-700">
          Temukan jawaban atas pertanyaan yang sering diajukan. Jika ada hal lain yang ingin Anda
          tanyakan, jangan ragu untuk menghubungi kami!
        </p>
        <p className="text-gray-700">
          Punya saran?{" "}
          <Link href={"/saran"} className="font-semibold text-red-700">
            Ajukan Saran
          </Link>
        </p>
      </div>
      <div className="space-y-4 w-3/5 max-md:w-full">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-red-50 p-4 text-gray-900"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="font-medium">{item.question}</h2>

              <svg
                className={`size-5 shrink-0 transition-transform duration-300 ${
                  activeIndex === index ? "-rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden border-x-2 border-b-2 border-red-50 rounded-lg"
                >
                  <p className="my-2 px-4 leading-relaxed text-gray-700">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Accordion;
