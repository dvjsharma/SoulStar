"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Sparkles,
  MessageSquare,
  Coins,
  Heart,
  Star,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

type Suggestion = {
  id: string;
  text: string;
  icon: typeof MessageSquare;
};

const CosmicRings = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-purple-500/20 rounded-full"
        style={{
          width: `${(i + 1) * 30}%`,
          height: `${(i + 1) * 30}%`,
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20 + i * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const CosmicParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.5, 0.1],
          x: [0, Math.random() * 10 - 5],
          y: [0, Math.random() * 10 - 5],
        }}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const CloudSuggestion: React.FC<{
  suggestion: Suggestion;
  onClick: () => void;
}> = ({ suggestion, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="group relative bg-white/20 backdrop-blur-md rounded-full p-4 text-left text-sm text-purple-100 hover:text-white transition-all border border-white/20 hover:border-white/40 flex items-center gap-3 overflow-hidden"
  >
    <div className="p-2 rounded-full bg-purple-500/30 group-hover:bg-purple-500/50 transition-colors">
      <suggestion.icon className="w-5 h-5" />
    </div>
    <span className="line-clamp-1 z-10">{suggestion.text}</span>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity"
      initial={false}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white rounded-full w-1 h-1"
        initial={{ x: "100%", y: "100%" }}
        animate={{
          x: ["-100%", "100%"],
          y: ["100%", "-100%"],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </motion.button>
);

export default function CosmicChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to SoulStar! What may I call you?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    { id: "1", text: "Reveal my cosmic career path", icon: Star },
    { id: "2", text: "Unveil my celestial love story", icon: Heart },
    { id: "3", text: "Forecast my astral finances", icon: Coins },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate bot response
    try {
      // Replace with your actual API URL
      const response = await fetch("http://localhost:5000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: text, session_id: 'abc' }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch response from API");
      }
  
      const data = await response.json();
  
      const botMessage: Message = {
        id: Date.now().toString(),
        text: data.message || "The cosmos whispers, but I can't interpret it right now.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching API response:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "Something went wrong. Please try again later.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    };
      setIsLoading(false);

      // Update suggestions based on context
      setSuggestions([
        {
          id: Date.now().toString(),
          text: "Explore deeper cosmic insights",
          icon: Sparkles,
        },
        {
          id: (Date.now() + 1).toString(),
          text: "Peek into next year's stars",
          icon: Star,
        },
        {
          id: (Date.now() + 2).toString(),
          text: "Align my chakras with the universe",
          icon: Heart,
        },
      ]);
    };

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
      <CosmicRings />
      <CosmicParticles />

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col h-screen">
        <header className="flex items-center justify-center gap-3 mb-6">
          <div className="p-2 rounded-full bg-purple-500/20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">
            Reveal your astrological destiny
          </h1>
        </header>

        <div className="flex-1 overflow-y-auto mb-6 space-y-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-900">
          <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl backdrop-blur-md
                  ${
                    message.sender === "user"
                      ? "bg-purple-500/30 rounded-tr-none"
                      : "bg-white/10 rounded-tl-none"
                  }`}
              >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                className="text-white/90 markdown-body"
              >
                {message.text}
              </ReactMarkdown>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2 p-4"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-purple-400 rounded-full"
                  animate={{
                    y: ["0%", "-50%", "0%"],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="grid gap-4 mb-6">
          <AnimatePresence>
            {!isLoading && messages[messages.length - 1]?.sender === "bot" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {suggestions.map((suggestion) => (
                  <CloudSuggestion
                    key={suggestion.id}
                    suggestion={suggestion}
                    onClick={() => handleSend(suggestion.text)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30"
            animate={{
              opacity: input ? 1 : 0,
              scale: input ? 1.02 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
            <Sparkles className="w-6 h-6 text-purple-300 ml-3" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Ask the cosmos..."
              className="flex-1 bg-transparent border-none text-white placeholder-purple-300 focus:outline-none text-lg py-2"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSend(input)}
              disabled={!input.trim() || isLoading}
              className="p-3 rounded-full bg-purple-500 hover:bg-purple-400 transition-colors disabled:opacity-50 disabled:hover:bg-purple-500"
            >
              <Send className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
