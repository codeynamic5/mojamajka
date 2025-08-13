"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const generateTimeSlots = (selectedDate: Date | undefined) => {
  if (!selectedDate) {
    // Default times when no date is selected
    return []
  }

  const dayOfWeek = selectedDate.getDay() // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const isFridayOrSaturday = dayOfWeek === 5 || dayOfWeek === 6 // Friday or Saturday
  
  // Sunday to Thursday: 10 AM to 10 PM
  // Friday to Saturday: 10 AM to 11 PM
  const endHour = isFridayOrSaturday ? 23 : 22 // 11 PM or 10 PM
  
  const timeSlots = []
  
  // Start from 10 AM (10:00)
  for (let hour = 10; hour <= endHour; hour++) {
    // Add :00 slot
    const hour12 = hour > 12 ? hour - 12 : hour
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour12 === 0 ? 12 : hour12
    
    timeSlots.push(`${displayHour}:00 ${ampm}`)
    
    // Add :30 slot (except for the last hour)
    if (hour < endHour) {
      timeSlots.push(`${displayHour}:30 ${ampm}`)
    }
  }
  
  return timeSlots
}

const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]

export default function ReservationsPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    partySize: "",
    time: "",
    specialRequests: "",
    seatingPreference: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !date || !formData.time || !formData.partySize) {
      alert("Please fill in all required fields.")
      return
    }

    // Format the reservation details for WhatsApp
    const reservationDetails = `FORM RESERVASI MOJA MAJKA CAFE & EATERY

Nama Lengkap: ${formData.name}
Tanggal Kedatangan: ${format(date, "PPPP")}
Jam Kedatangan: ${formData.time}
Jumlah Pax: ${formData.partySize} ${formData.partySize === "1" ? "person" : "people"}
Email: ${formData.email}
No Telp.: ${formData.phone}
${formData.seatingPreference ? `Preferensi Tempat Duduk: ${formData.seatingPreference}` : ""}
${formData.specialRequests ? `Catatan Tambahan: ${formData.specialRequests}` : ""}

Please confirm availability for this reservation. Thank you!`

    // Replace with your WhatsApp number (include country code, no + or spaces)
    const whatsappNumber = "6281317822742" // Replace with actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(reservationDetails)}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Show confirmation to user
    alert("Redirecting to WhatsApp to send your reservation request!")
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-900 mb-6">Make a Reservation</h1>
          <p className="text-xl text-gray-700">Reserve your table and join us for an unforgettable dining experience</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            {/* Reservation Form */}
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900">Reservation Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="date">Date *</Label>
                      <div className="space-y-2">
                        {/* Fancy Calendar Picker */}
                        <div className="relative">
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                onClick={() => console.log("Date button clicked")}
                                className={cn(
                                  "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <span className="flex items-center">
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP") : "Select date"}
                                </span>
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 z-[9999]" align="start">
                              <div className="bg-white border rounded-lg shadow-lg">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={(selectedDate) => {
                                    console.log("Date selected:", selectedDate)
                                    setDate(selectedDate)
                                    // Clear the selected time when date changes
                                    setFormData((prev) => ({ ...prev, time: "" }))
                                  }}
                                  disabled={(date) => {
                                    const today = new Date()
                                    today.setHours(0, 0, 0, 0)
                                    return date < today
                                  }}
                                  initialFocus
                                  className="rounded-md"
                                />
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="time">Time *</Label>
                      <Select 
                        value={formData.time} 
                        onValueChange={(value) => handleInputChange("time", value)}
                        disabled={!date}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={date ? "Select time" : "Select date first"} />
                        </SelectTrigger>
                        <SelectContent className="max-h-[200px] overflow-y-auto">
                          {generateTimeSlots(date).map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {date && (
                        <p className="text-xs text-gray-500 mt-1">
                          {date.getDay() === 5 || date.getDay() === 6 
                            ? "Friday & Saturday: 10:00 AM - 11:00 PM" 
                            : "Sunday - Thursday: 10:00 AM - 10:00 PM"}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="partySize">Party Size *</Label>
                      <Select
                        value={formData.partySize}
                        onValueChange={(value) => handleInputChange("partySize", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {partySizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size} {size === "1" ? "person" : "people"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="seatingPreference">Seating Preference</Label>
                    <Select
                      value={formData.seatingPreference}
                      onValueChange={(value) => handleInputChange("seatingPreference", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="No preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indoor">Indoor seating</SelectItem>
                        <SelectItem value="outdoor">Outdoor patio</SelectItem>
                        <SelectItem value="booth">Booth seating</SelectItem>
                        <SelectItem value="table">Regular table</SelectItem>
                        <SelectItem value="bar">Bar seating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Dietary restrictions, special occasions, accessibility needs, etc."
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-800 hover:bg-red-700">
                    Submit Reservation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
