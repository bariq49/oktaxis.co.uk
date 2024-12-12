"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submissionMessage, setSubmissionMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setSubmissionMessage("Submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Input
          placeholder="Enter Your Name"
          className="w-full px-4 py-5 border-gray-300 rounded-md"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full px-4 py-5 border-gray-300 rounded-md"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Enter Your Contact Number"
          className="w-full px-4 py-5 border-gray-300 rounded-md"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          pattern="[0-9]{10}"
        />
        <p className="mt-1 text-sm text-gray-500">
          Contact should not be less than 10 digits, e.g., 2241111111
        </p>
      </div>

      <div>
        <Textarea
          placeholder="Write here..."
          className="w-full px-4 py-2 border-gray-300 rounded-md h-32"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          className="w-48 bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Submit Your Request
        </Button>
      </div>

      {submissionMessage && (
        <p className="text-center text-green-600 font-semibold">{submissionMessage}</p>
      )}
    </form>
  )
}

