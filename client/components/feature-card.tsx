"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors relative group min-h-[300px]"
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon className="w-10 h-10 text-white mb-4 w-12 h-14" />
      <h3 className="text-xl font-semibold text-white mb-2 relative z-10">
        {title}
      </h3>
      <p className="text-white/70 relative z-10">{description}</p>
    </motion.div>
  );
}