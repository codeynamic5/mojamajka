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

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
]

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
    const reservationDetails = `🍽️ *NEW RESERVATION REQUEST*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📅 *Date:* ${format(date, "PPPP")}
🕐 *Time:* ${formData.time}
👥 *Party Size:* ${formData.partySize} ${formData.partySize === "1" ? "person" : "people"}
${formData.seatingPreference ? `🪑 *Seating Preference:* ${formData.seatingPreference}` : ""}
${formData.specialRequests ? `📝 *Special Requests:* ${formData.specialRequests}` : ""}

Please confirm availability for this reservation. Thank you! 🙏`

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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <Card>
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
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-red-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-red-800 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">WhatsApp Reservations</h3>
                      <p className="text-gray-700 mb-2">+1 (234) 567-8900</p>
                      <p className="text-sm text-gray-600">
                        Submit your reservation request via WhatsApp for quick confirmation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-red-800 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone Reservations</h3>
                      <p className="text-gray-700 mb-2">(555) 123-4567</p>
                      <p className="text-sm text-gray-600">
                        Call us directly for immediate confirmation or large party reservations (10+ people)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-red-800 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-gray-700 mb-2">reservations@cornercafe.com</p>
                      <p className="text-sm text-gray-600">For special events or detailed requests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-red-800 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Location</h3>
                      <p className="text-gray-700">
                        123 Main Street
                        <br />
                        Downtown District
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-red-900">Hours & Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-red-800" />
                      <div>
                        <p className="font-semibold">Monday - Friday</p>
                        <p className="text-gray-700">7:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-red-800" />
                      <div>
                        <p className="font-semibold">Saturday</p>
                        <p className="text-gray-700">8:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-red-800" />
                      <div>
                        <p className="font-semibold">Sunday</p>
                        <p className="text-gray-700">8:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-red-900">Reservation Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• Reservations are confirmed within 2 hours via WhatsApp</p>
                    <p>• Please arrive within 15 minutes of your reservation time</p>
                    <p>• Cancellations must be made at least 2 hours in advance</p>
                    <p>• Large parties (8+) may require a deposit</p>
                    <p>• We hold tables for 15 minutes past reservation time</p>
                    <p>• Walk-ins are welcome based on availability</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
