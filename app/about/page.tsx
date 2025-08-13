import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Leaf, Users, Instagram } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-red-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Moja Majka began as a dream to create a space where community, quality food, and genuine hospitality
              come together in perfect harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-red-900 mb-6">From Humble Beginnings</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2025, Moja Majka started as a small neighborhood spot with
                just six tables and a big dream. What began as a simple coffee shop has grown into a beloved community
                gathering place.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our commitment to quality ingredients, exceptional service, and creating a warm, welcoming atmosphere
                has remained unchanged since day one. Every recipe is crafted with care, every ingredient sourced with
                purpose.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve not just great food and coffee, but to be a place where memories are made,
                friendships are formed, and the community comes together.
              </p>
              <div className="mt-8">
                <Button 
                  asChild 
                  className="bg-red-700 hover:bg-red-600 text-white transition-all duration-300"
                >
                  <a 
                    href="https://www.instagram.com/mojamajka.eatery/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    See Our Moments
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cafe founders"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Community First",
                description:
                  "We believe in building connections and supporting our local community through every cup and meal.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description:
                  "From locally sourced ingredients to eco-friendly practices, we're committed to protecting our planet.",
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description:
                  "We never compromise on quality, from our carefully selected ingredients to our expertly trained staff.",
              },
              {
                icon: Users,
                title: "Inclusive Space",
                description:
                  "Everyone is welcome at Moja Majka. We celebrate diversity and create a space for all.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <value.icon className="w-12 h-12 text-red-800 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-red-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
