'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import BagCount from '../PassengerAndLuggageSelector/BagCount'
import PassengerCount from '../PassengerAndLuggageSelector/PassengerCount'
import { Button } from '@/components/ui/button'

export default function PassengerInfo() {
  // State variables
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  })
  const [submitted, setSubmitted] = useState(false)

  // Format phone number to (XXX-XXX-XXXX)
  const formatPhoneNumber = (input: string) => {
    const digitsOnly = input.replace(/\D/g, '') // Remove non-digit characters
    if (digitsOnly.length <= 3) return digitsOnly
    if (digitsOnly.length <= 6) return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`
    return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`
  }

  // Handle phone number input
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const digitsOnly = input.replace(/\D/g, '') // Allow only digits
    if (digitsOnly.length > 10) return // Prevent input beyond 10 digits
    setPhoneNumber(formatPhoneNumber(input))
    setErrors((prev) => ({ ...prev, phone: false })) // Reset phone error
  }

  // Handle name input
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setErrors((prev) => ({ ...prev, name: false })) // Reset name error
  }

  // Handle email input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setErrors((prev) => ({ ...prev, email: false })) // Reset email error
  }

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let hasErrors = false

    // Validate name
    if (!name.trim()) {
      setErrors((prev) => ({ ...prev, name: true }))
      hasErrors = true
    }

    // Validate email
    if (!email.trim() || !isValidEmail(email)) {
      setErrors((prev) => ({ ...prev, email: true }))
      hasErrors = true
    }

    // Validate phone number
    if (phoneNumber.replace(/\D/g, '').length !== 10) {
      setErrors((prev) => ({ ...prev, phone: true }))
      hasErrors = true
    }

    if (!hasErrors) {
      alert('Form submitted successfully!')
      // Reset the form or perform additional actions here
    }

    setSubmitted(true)
  }

  return (
    <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit}>
      {/* Form Title */}
      <div className="flex items-center gap-2">
        <h2 className="text-base font-medium">Main Passenger *</h2>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Name Input */}
        <div>
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            className={`w-full bg-white border-gray-200 py-7 focus-visible:ring-0 ${
              submitted && errors.name ? 'border-red-500' : ''
            }`}
            aria-invalid={submitted && errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          {submitted && errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-500">
              Please enter your name.
            </p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full bg-white border-gray-200 py-7 focus-visible:ring-0 ${
              submitted && errors.email ? 'border-red-500' : ''
            }`}
            aria-invalid={submitted && errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {submitted && errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500">
              Please enter a valid email address.
            </p>
          )}
        </div>

        {/* Phone Number Input */}
        <div className="relative">
          {/* Country Flag */}
          <div className="absolute left-3 top-[50%] -translate-y-1/2 flex items-center gap-1 pointer-events-none">
            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="UK flag"
              className="h-4 w-5 object-contain"
            />
          </div>

          {/* Phone Input */}
          <Input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className={`w-full py-7 focus-visible:ring-0 bg-white border-gray-200 pl-12 ${
              submitted && errors.phone ? 'border-red-500' : ''
            }`}
            aria-invalid={submitted && errors.phone ? "true" : "false"}
            aria-describedby="phone-error"
          />
          {submitted && errors.phone && (
            <p id="phone-error" className="absolute left-0 mt-1 text-xs text-red-500" >
              Please enter a valid 10-digit phone number.
            </p>
          )}
        </div>

      </div>

      <div className="flex gap-x-3">
        <BagCount/>
        <PassengerCount/>
      </div>
       
    </form>
  )
}
