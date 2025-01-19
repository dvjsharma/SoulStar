'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'

export function CosmicInput() {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30"
        animate={{
          opacity: isFocused ? 1 : 0,
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="relative flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/10">
        <Sparkles className="w-5 h-5 text-purple-300 ml-2" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ask the stars..."
          className="flex-1 bg-transparent border-none text-white placeholder-purple-300 focus:outline-none text-lg py-2"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl bg-purple-500 hover:bg-purple-400 transition-colors"
        >
          <Send className="w-5 h-5 text-white" />
        </motion.button>
      </div>
    </div>
  )
}

