import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, MapPin, Phone, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/60 z-10" />
        <Image
          src="/mm-logo.png?height=1080&width=1920"
          alt="Cafe interior"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Moja Majka</h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            More than a cafe, it's a community. We serve kindness everyday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center button-container">
            <Button asChild size="lg" className="bg-red-700 hover:bg-red-600 text-white transition-all duration-300 menu-button">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-900 bg-transparent transition-all duration-300 hover:scale-150 reservation-button"
            >
              <Link href="/reservations">Make a Reservation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-900 mb-6">Cerita Moja Majka</h2>
              <p className="text-lg text-gray-700 mb-6">
                Moja Majka diambil dari bahasa Serbia yang artinya “ibu saya” atau “ibuku” dengan kesan tersayang atau terhormat. Menceritakan kisah founder yang pernah tinggal di Serbia dan memiliki momen berkesan
                di sana.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Seperti kata pepatah nama adalah doa, ada harapan Moja Majka menjadi tempat yang welcoming, comforting dan pleasant seperti rumah Ibu bagi semua orang di berbagai kalangan dan komunitas.
              </p>
              <Button asChild className="bg-red-800 hover:bg-red-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Chef preparing food"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Our Signatures</h2>
            <p className="text-xl text-gray-600">Taste the flavors that make us special</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Buttered Meltique Steak",
                description: "Farm-fresh eggs, avocado, quinoa, and seasonal vegetables",
                price: "16",
                image: "breakfast bowl with eggs and avocado",
              },
              {
                name: "Smoked Beef Brisket Carbonara",
                description: "Grass-fed beef, aged cheddar, caramelized onions, brioche bun",
                price: "18",
                image: "gourmet burger with fries",
              },
              {
                name: "Kopi Susu Moja Majka",
                description: "Mixed greens, feta, olives, tomatoes, house vinaigrette",
                price: "14",
                image: "fresh mediterranean salad",
              },
              {
                name: "Caramel Earl Grey",
                description: "Single-origin beans, expertly roasted, perfectly brewed",
                price: "5",
                image: "coffee cup with latte art",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&query=${item.image}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="text-2xl font-bold text-red-800">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">What Our Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review:
                  "The best cafe in town! The atmosphere is cozy and the food is absolutely delicious. I come here every weekend.",
              },
              {
                name: "Michael Chen",
                rating: 5,
                review:
                  "Outstanding service and incredible coffee. The staff really knows how to make you feel welcome.",
              },
              {
                name: "Emily Rodriguez",
                rating: 5,
                review:
                  "Perfect spot for brunch with friends. The menu has something for everyone and the quality is consistently excellent.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
                  <p className="font-semibold text-red-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reservation */}
      <section className="py-16 px-4 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dine With Us?</h2>
          <p className="text-xl mb-8 text-red-100">
            Reserve your table today and experience the warmth of Moja Majka
          </p>
          <Button asChild size="lg" className="bg-white text-red-900 hover:bg-red-50 transition-all duration-300 hover:scale-110">
            <Link href="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
