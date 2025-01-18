"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function AIRecommendationForm() {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send query to AI backend)
    console.log("Query submitted:", query)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-md p-6 rounded-lg">
      <div>
        <Label htmlFor="query" className="text-white">What spiritual guidance are you seeking?</Label>
        <Textarea
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          className="mt-1 h-32"
          placeholder="E.g., How can I find inner peace in my daily life?"
        />
      </div>
      <Button type="submit" className="w-full">Get AI Recommendations</Button>
    </form>
  )
}

