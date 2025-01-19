import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ParticleBackground } from "@/components/particles";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
