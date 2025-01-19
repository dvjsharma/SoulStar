"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, User } from 'lucide-react';

type Message = {
  text: string;
  sender: "user" | "bot";
};

type Suggestion = string;

export function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [suggestions] = useState<Suggestion[]>([
    "Tell me about my career",
    "What's in store for my love life?",
    "How's my financial future?"
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setIsThinking(true);
      // Simulate bot response
      setTimeout(() => {
        setIsThinking(false);
        setMessages((prev) => [
          ...prev,
          { text: `You said: ${input}`, sender: "bot" },
        ]);
      }, 2000);
      setInput("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl h-[700px] flex flex-col shadow-xl transition-all duration-300">
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.sender === "user" ? "flex-row-reverse" : ""
            }`}
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              {message.sender === "user" ? (
                <div className="bg-gradient-to-r from-purple-800 to-indigo-700 rounded-full p-2">
                  <User className="w-6 h-6 text-white" />
                </div>
              ) : (
                <div className="bg-gradient-to-r from-indigo-800 to-purple-900 rounded-full p-2">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            
            {/* Message Bubble */}
            <div
              className={`p-4 rounded-xl max-w-[60%] break-words ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white"
                  : "bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-800 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {/* Thinking Indicator */}
        {isThinking && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-800 to-purple-900 p-2 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="bg-gray-100 rounded-xl p-4 animate-pulse">
              Astro thinking...
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      {messages.length === 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInput(suggestion)}
              className="p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all text-left"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {/* Input Section */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 items-center p-3 border-t border-gray-200"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the stars..."
          className="flex-1 p-4 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <Button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white rounded-full shadow-xl hover:opacity-90 focus:ring-2 focus:ring-purple-400 transition-all"
        >
          Send
        </Button>
      </form>
    </div>
  );
}