'use client'

import { BarChart3, Bot, Moon, Sparkles } from 'lucide-react'
import { FeatureCard } from './feature-card'


const features = [
  {
    title: 'Kundli & Horoscope Generation',
    description: 'Comprehensive analysis of all 12 houses, covering career, relationships, personal growth, family, and social connections',
    icon: BarChart3,
  },
  {
    title: 'AI Recommendations',
    description: 'Tailored gemstone and puja recommendations with detailed insights on their importance, benefits, dos, and dont\'s ',
    icon: Sparkles,
  },
  {
    title: 'Spiritual Content Delivery',
    description: 'Get meditation and workout suggestions based on your horoscope, along with personalized sleep content.',
    icon: Moon,
  },
  {
    title: 'Interactive Chatbot',
    description: '24/7 access to an AI-driven chatbot for personalized spiritual guidance and advice.',
    icon: Bot,
  },
]

// Duplicate the features array to create a seamless loop
const duplicatedFeatures = [...features, ...features]

export function Features() {
  return (
    <div className="py-24 relative overflow-hidden">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * ${features.length}));
          }
        }

        .scroll-container {
          display: flex;
          gap: 2rem;
          animation: scroll 20s linear infinite;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }

        .feature-card {
          flex: 0 0 300px;
          width: 300px;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
        </h2>
        <div className="overflow-x-hidden">
          <div className="scroll-container">
            {duplicatedFeatures.map((feature, index) => (
              <div 
                key={`${feature.title}-${index}`}
                className="feature-card"
              >
                <FeatureCard {...feature} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
