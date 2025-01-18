import { ChatbotInterface } from "@/components/chatbot-interface";
import { ParticleBackground } from "@/components/particles";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 p-8">
      <ParticleBackground />
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-white text-center mb-8 animate__animated animate__fadeInUp">
        🤖 Welcome to the Chatbot
      </h1>

      {/* Chatbot Container */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-7xl rounded-3xl p-6 backdrop-blur-lg transition-all duration-500">
          <ChatbotInterface />
        </div>
      </div>
    </div>
  );
}
