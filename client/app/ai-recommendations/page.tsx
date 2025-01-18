import { AIRecommendationForm } from "@/components/ai-recommendation-form"

export default function AIRecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">AI Recommendations</h1>
      <AIRecommendationForm />
    </div>
  )
}

