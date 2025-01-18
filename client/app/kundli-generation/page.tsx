"use client";

import { KundliGenerationForm } from "@/components/kundli-generation-form";
import { ParticleBackground } from "@/components/particles";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function KundliGenerationPage() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left - rect.width / 3;
      const y = event.clientY - rect.top - rect.height / 3;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: isHovered ? [0, 360] : [360, 0],
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  }, [isHovered, controls]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 overflow-hidden">
      <ParticleBackground />
      <h1 className="text-3xl p-8 font-bold text-white flex flex-col items-center justify-start mb-6">
        Kundli Generation
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-1">
        {/* Form Section */}
        <div className="flex-1 mt-[-100px]">
          <KundliGenerationForm />
        </div>
        {/* Motion Div Section */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className="relative w-full max-w-[600px] mx-auto perspective-1000 "
        >
          <motion.div className="zodiac-3d-effect" animate={controls}>
            <div className="zodiac-ring"></div>
            <div className="zodiac-ring " style={{ animationDelay: "-5s" }}></div>
            <div className="zodiac-ring" style={{ animationDelay: "-10s" }}></div>
            <div className="pulsating-glow"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6b4859e7f45044ed829514316a50b64.jpg-8Ek42eLaYJADkVDmgGoyyW8G1oV2lm.jpeg"
              alt="Mystical Zodiac Wheel"
              width={500}
              height={500}
              className="rounded-full relative z-5"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
