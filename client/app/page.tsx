import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ParticleBackground } from "@/components/particles";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Features />

      {/* Floating button to navigate to the chatbot */}
      <Link
        href="/chatbot"
        className="fixed font-bold bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none"
        aria-label="Go to Chatbot"
      >
        🗨️ Chat with AI
      </Link>
    </main>
  );
}
