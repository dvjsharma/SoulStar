"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function KundliGenerationForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
  });

  const formFields = [
    { label: "Full Name", id: "name", type: "text" },
    { label: "Birth Date", id: "birthDate", type: "date" },
    { label: "Birth Time", id: "birthTime", type: "time" },
    { label: "Birth Place", id: "birthPlace", type: "text" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/10 backdrop-blur-md p-6 rounded-lg w-full max-w-md"
      >
        {formFields.map(({ label, id, type }) => (
          <div key={id}>
            <Label htmlFor={id} className="text-white">
              {label}
            </Label>
            <Input
              id={id}
              type={type}
              value={formData[id as keyof typeof formData]}
              onChange={handleChange}
              required
              className="mt-1 border-2 border-white/5 rounded-lg p-2 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        ))}
        <Button type="submit" className="w-full text-white">
          Generate Kundli
        </Button>
      </form>
    </div>
  );
}
