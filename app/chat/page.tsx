"use client";

import React, { useEffect, useRef } from "react";
import { MessageCard } from "../components/MessageCard";
import { NoChat } from "../components/NoChat";
import { IoSend } from "react-icons/io5";
import { useChat } from "@ai-sdk/react";
import { motion } from "framer-motion";
import { ImSpinner3 } from "react-icons/im";

const Page = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="h-screen flex bg-gradient-to-br from-white via-red-200 to-red-100 selection:bg-red-700/80 selection:text-white">
        <div className="w-full mb-28 mt-10 flex flex-col p-2 overflow-y-auto">
          <div className="flex-1 space-y-3 w-full px-[30%] max-lg:px-[18%] max-md:px-[6%]">
            {messages.length === 0 && <NoChat />}
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCard
                  role={message.role as "user" | "assistant"}
                  message={message.content}
                />
              </motion.div>
            ))}
            {isLoading && (
              <div className="animate-pulse text-gray-500 px-6 py-4 max-w-md w-fit">
                Thinking...
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="right-0 left-0 fixed bottom-10 ">
            <form
              onSubmit={handleSubmit}
              className="border-gray-300 border w-[40%] max-lg:w-[70%] max-md:w-[90%] flex mx-auto bg-white p-2 rounded-full shadow-md items-center"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            >
              <textarea
                className="w-full p-2 text-lg resize-none rounded-2xl focus:outline-none max-h-40 overflow-hidden"
                placeholder="Type your message"
                value={input}
                onChange={handleInputChange}
                rows={1}
              />
              <button
                type="submit"
                className={` p-4 rounded-full text-white shadow-md ${
                  !input.trim() ? "bg-red-400 cursor-not-allowed" : "bg-red-700 hover:bg-red-800"
                }`}
                disabled={!input.trim() || isLoading}
              >
                {isLoading ? <ImSpinner3 className="animate-spin" /> : <IoSend />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
