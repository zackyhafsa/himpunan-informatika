"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoIosChatbubbles, IoMdSend, IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

// Definisikan tipe untuk pesan
interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const Bubble = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    // Pesan pembuka
    {
      id: 1,
      text: "Halo! Ada yang bisa saya bantu? 😁",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll ke bawah saat ada pesan baru
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Tambahkan pesan user
    const newUserMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
    };

    // Tambahkan pesan bot (simulasi)
    const botResponse: Message = {
      id: Date.now() + 1,
      text: `Terima kasih telah mengirim: "${inputMessage}". Kami akan segera merespons.`,
      sender: "bot",
    };

    setMessages([...messages, newUserMessage, botResponse]);
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      {/* Tombol Bubble */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed p-4 bg-red-700 text-white z-50 rounded-lg right-5 bottom-5 border shadow-lg hover:bg-red-900 cursor-pointer"
        onClick={toggleModal}
      >
        <IoIosChatbubbles className="text-3xl" />
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-white rounded-lg w-[600px] h-[500px] flex flex-col relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header Chat */}
              <div className="m-2 mr-11 bg-red-700 text-white p-4 rounded-lg">
                <h2 className="text-xl font-bold">HMIF Chat</h2>
              </div>

              {/* Area Pesan */}
              <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4 space-y-2">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[70%] p-3 rounded-lg 
                        ${
                          message.sender === "user"
                            ? "bg-red-700 text-white rounded-br-none"
                            : "bg-gray-200 text-black rounded-bl-none"
                        }
                      `}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Pesan */}
              <div className="p-4 border-t flex items-center relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ketik pesan..."
                  className="flex-grow p-2 border rounded-lg focus:outline-red-700"
                />
                <button
                  onClick={sendMessage}
                  className="absolute bg-red-700 text-white p-2 rounded-lg right-5"
                >
                  <IoMdSend />
                </button>
              </div>

              {/* Tombol Tutup */}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={toggleModal}
              >
                <IoMdCloseCircle className="text-red-700 text-3xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Bubble;
