"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
]

export function HoroscopeInsightsForm() {
  const [zodiacSign, setZodiacSign] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., fetch horoscope insights)
    console.log("Fetching insights for:", zodiacSign)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-md p-6 rounded-lg">
      <div>
        <Label htmlFor="zodiacSign" className="text-white">Select Your Zodiac Sign</Label>
        <Select onValueChange={setZodiacSign} required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Choose your sign" />
          </SelectTrigger>
          <SelectContent>
            {zodiacSigns.map((sign) => (
              <SelectItem key={sign} value={sign.toLowerCase()}>
                {sign}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full" disabled={!zodiacSign}>
        Get Horoscope Insights
      </Button>
    </form>
  )
}

