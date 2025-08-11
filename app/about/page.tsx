import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Leaf, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-red-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The Corner Cafe began as a dream to create a space where community, quality food, and genuine hospitality
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
                Founded in 2015 by Maria and James Thompson, The Corner Cafe started as a small neighborhood spot with
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
                  "Everyone is welcome at The Corner Cafe. We celebrate diversity and create a space for all.",
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

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Thompson",
                role: "Co-Founder & Head Chef",
                bio: "With 15 years of culinary experience, Maria brings creativity and passion to every dish.",
                image: "professional chef portrait",
              },
              {
                name: "James Thompson",
                role: "Co-Founder & General Manager",
                bio: "James ensures every guest feels welcome and every detail is perfect.",
                image: "restaurant manager portrait",
              },
              {
                name: "Sarah Kim",
                role: "Pastry Chef",
                bio: "Sarah's artistic touch creates the beautiful desserts and baked goods we're known for.",
                image: "pastry chef portrait",
              },
              {
                name: "David Martinez",
                role: "Head Barista",
                bio: "David's expertise in coffee ensures every cup is crafted to perfection.",
                image: "barista portrait",
              },
              {
                name: "Lisa Chen",
                role: "Sous Chef",
                bio: "Lisa's attention to detail and culinary skills help maintain our high standards.",
                image: "sous chef portrait",
              },
              {
                name: "Alex Johnson",
                role: "Front of House Manager",
                bio: "Alex leads our service team to create memorable experiences for every guest.",
                image: "service manager portrait",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&query=${member.image}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-900 mb-2">{member.name}</h3>
                  <p className="text-red-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">We're honored to be recognized by our community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2023",
                award: "Best Local Cafe",
                organization: "City Magazine",
              },
              {
                year: "2022",
                award: "Sustainability Award",
                organization: "Green Business Council",
              },
              {
                year: "2021",
                award: "Community Choice",
                organization: "Local Business Awards",
              },
              {
                year: "2020",
                award: "Excellence in Service",
                organization: "Restaurant Association",
              },
            ].map((award, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-red-800 mb-2">{award.year}</div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">{award.award}</h3>
                  <p className="text-gray-700">{award.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
