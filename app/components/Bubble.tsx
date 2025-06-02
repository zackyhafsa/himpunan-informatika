"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoIosChatbubbles, IoMdSend, IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Bubble = () => {
  return (
    <>
      <motion.a
        href="/chat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed p-4 bg-red-700 text-white z-50 rounded-lg right-5 bottom-5 border shadow-lg hover:bg-red-900 cursor-pointer"
      >
        <IoIosChatbubbles className="text-3xl" />
      </motion.a>
    </>
  );
};

export default Bubble;
