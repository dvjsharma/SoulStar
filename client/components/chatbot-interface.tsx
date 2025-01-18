"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `You said: ${input}`, sender: "bot" },
        ]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl h-[700px] flex flex-col shadow-xl transition-all duration-300">
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl max-w-[60%] break-words ${
              message.sender === "user"
                ? "bg-blue-600 text-white ml-auto shadow-lg transform transition-all duration-300"
                : "bg-gray-700 text-white shadow-md transform transition-all duration-300"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 items-center p-3 border-t border-gray-600 mt-auto"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-4 rounded-full text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <Button
          type="submit"
          className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-xl hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 transition-all"
        >
          Send
        </Button>
      </form>
    </div>
  );
}