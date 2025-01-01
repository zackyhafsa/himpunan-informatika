"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoIosChatbubbles, IoMdSend, IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const Bubble = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Halo! Ada yang bisa saya bantu? 😁", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.reply,
          sender: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const errorMessage: Message = {
          id: Date.now() + 1,
          text: `Oops! Ada masalah: ${data.error}`,
          sender: "bot",
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: `Oops! Tidak bisa terhubung ke server.`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg w-[600px] h-[500px] flex flex-col relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="m-2 mr-11 bg-red-700 text-white p-4 rounded-lg">
                <h2 className="text-xl font-bold">HMIF Chat</h2>
              </div>
              <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4 space-y-2">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.sender === "user" ? "bg-red-700 text-white" : "bg-gray-200 text-black"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>
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
