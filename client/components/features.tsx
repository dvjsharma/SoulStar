'use client'

import { BarChart3, Bot, Moon, Sparkles } from 'lucide-react'
import { FeatureCard } from './feature-card'

const features = [
  {
    title: 'Kundli Generation',
    description: 'Get detailed birth chart analysis with personalized insights.',
    icon: BarChart3,
  },
  {
    title: 'AI Recommendations',
    description: 'Receive AI-powered guidance tailored to your spiritual journey.',
    icon: Sparkles,
  },
  {
    title: 'Horoscope Insights',
    description: 'Daily and monthly astrological predictions and guidance.',
    icon: Moon,
  },
  {
    title: 'Chatbot Interaction',
    description: '24/7 spiritual guidance through our AI chatbot.',
    icon: Bot,
  },
]

export function Features() {
  return (
    <div className=" py-24 relative overflow-hidden">
      <div  />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
 
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}