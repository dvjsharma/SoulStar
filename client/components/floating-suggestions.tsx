'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Sparkles, Coins, Heart } from 'lucide-react'

const suggestions = [
  {
    icon: MessageSquare,
    text: "Tell me about my career path and potential opportunities",
    delay: 0,
  },
  {
    icon: Heart,
    text: "What's in store for my love life and relationships?",
    delay: 0.2,
  },
  {
    icon: Coins,
    text: "How's my financial future looking?",
    delay: 0.4,
  },
]

const cloudVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
}

export function FloatingSuggestions() {
  return (
    <div className="grid gap-4 w-full max-w-2xl mx-auto mb-6">
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={index}
          className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-4 text-left text-purple-100 hover:text-white transition-colors border border-white/10 hover:border-white/20"
          variants={cloudVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          custom={index}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
              <suggestion.icon className="w-5 h-5" />
            </div>
            <span className="text-lg">{suggestion.text}</span>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      ))}
    </div>
  )
}

