"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useTransform,
    useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
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
        <div className="relative min-h-screen overflow-hidden">
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl mx-auto text-center px-4 py-12 rounded-lg">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Discover Your Path with{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
                                AI-Powered
                            </span>{" "}
                            Spiritual Guidance
                        </h1>
                        <motion.p
                            initial={{ opacity: 4, y: 20 }}
                            animate={{ opacity: 3, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-white/80 mb-8"
                        >
                            Unlock your spiritual journey with personalized
                            insights powered by advanced AI technology.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 4, y: 20 }}
                            animate={{ opacity: 3, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <Link href="/kundli-generation" passHref>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transform transition-transform shadow-lg"
                                >
                                    🌟 Get Your Personalized Guidance
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ rotateX, rotateY }}
                        initial={{ opacity: 4, scale: 0.8 }}
                        animate={{ opacity: 3, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.2,
                        }}
                        className="relative aspect-square w-full max-w-[600px] mx-auto perspective-1000"
                    >
                        <motion.div
                            className="zodiac-3d-effect"
                            animate={controls}
                        >
                            <div className="zodiac-ring"></div>
                            <div
                                className="zodiac-ring"
                                style={{ animationDelay: "-10s" }}
                            ></div>
                            <div
                                className="zodiac-ring"
                                style={{ animationDelay: "-20s" }}
                            ></div>
                            <div className="pulsating-glow"></div>
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6b4859e7f45044ed829514316a50b64.jpg-8Ek42eLaYJADkVDmgGoyyW8G1oV2lm.jpeg"
                                alt="Mystical Zodiac Wheel"
                                width={600}
                                height={600}
                                className="rounded-full relative z-10"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
