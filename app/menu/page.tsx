"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Leaf, Flame, Wheat } from "lucide-react"

const menuCategories = ["All", "Breakfast", "Lunch", "Dinner", "Beverages", "Desserts"]

const menuItems = [
  {
    id: 1,
    name: "Artisan Breakfast Bowl",
    description: "Farm-fresh eggs, avocado, quinoa, seasonal vegetables, house-made hollandaise",
    price: 16,
    category: "Breakfast",
    dietary: ["vegetarian"],
    image: "breakfast bowl with eggs and avocado",
  },
  {
    id: 2,
    name: "Classic Pancakes",
    description: "Fluffy buttermilk pancakes, maple syrup, fresh berries, whipped cream",
    price: 12,
    category: "Breakfast",
    dietary: ["vegetarian"],
    image: "stack of pancakes with berries",
  },
  {
    id: 3,
    name: "Signature Burger",
    description: "Grass-fed beef, aged cheddar, caramelized onions, lettuce, tomato, brioche bun",
    price: 18,
    category: "Lunch",
    dietary: [],
    image: "gourmet burger with fries",
  },
  {
    id: 4,
    name: "Mediterranean Salad",
    description: "Mixed greens, feta cheese, olives, cherry tomatoes, cucumber, house vinaigrette",
    price: 14,
    category: "Lunch",
    dietary: ["vegetarian", "gluten-free"],
    image: "fresh mediterranean salad",
  },
  {
    id: 5,
    name: "Grilled Salmon",
    description: "Atlantic salmon, lemon herb butter, roasted vegetables, wild rice",
    price: 24,
    category: "Dinner",
    dietary: ["gluten-free"],
    image: "grilled salmon with vegetables",
  },
  {
    id: 6,
    name: "Pasta Primavera",
    description: "Fresh linguine, seasonal vegetables, garlic, olive oil, parmesan",
    price: 19,
    category: "Dinner",
    dietary: ["vegetarian"],
    image: "pasta with vegetables",
  },
  {
    id: 7,
    name: "Artisan Coffee",
    description: "Single-origin beans, expertly roasted, available hot or iced",
    price: 5,
    category: "Beverages",
    dietary: ["vegan", "gluten-free"],
    image: "coffee cup with latte art",
  },
  {
    id: 8,
    name: "Fresh Smoothie",
    description: "Seasonal fruits, yogurt, honey, choice of protein powder",
    price: 8,
    category: "Beverages",
    dietary: ["vegetarian", "gluten-free"],
    image: "colorful fruit smoothie",
  },
  {
    id: 9,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake, molten center, vanilla ice cream, berry compote",
    price: 9,
    category: "Desserts",
    dietary: ["vegetarian"],
    image: "chocolate lava cake with ice cream",
  },
  {
    id: 10,
    name: "Seasonal Fruit Tart",
    description: "Buttery pastry, vanilla custard, fresh seasonal fruits",
    price: 8,
    category: "Desserts",
    dietary: ["vegetarian"],
    image: "fruit tart with berries",
  },
]

const dietaryIcons = {
  vegetarian: { icon: Leaf, label: "Vegetarian", color: "bg-green-100 text-green-800" },
  vegan: { icon: Leaf, label: "Vegan", color: "bg-green-100 text-green-800" },
  "gluten-free": { icon: Wheat, label: "Gluten-Free", color: "bg-yellow-100 text-yellow-800" },
  spicy: { icon: Flame, label: "Spicy", color: "bg-red-100 text-red-800" },
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-900 mb-6">Our Menu</h1>
          <p className="text-xl text-gray-700 mb-8">
            Crafted with love, served with pride. Every dish tells a story of quality and passion.
          </p>
          <Button className="bg-red-800 hover:bg-red-700">
            <Download className="w-4 h-4 mr-2" />
            Download PDF Menu
          </Button>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {menuCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-red-800 hover:bg-red-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&query=${item.image}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-red-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-red-800">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.dietary.map((diet) => {
                        const dietInfo = dietaryIcons[diet as keyof typeof dietaryIcons]
                        if (!dietInfo) return null
                        return (
                          <Badge key={diet} className={dietInfo.color}>
                            <dietInfo.icon className="w-3 h-3 mr-1" />
                            {dietInfo.label}
                          </Badge>
                        )
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No items found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Seasonal Specials */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Seasonal Specials</h2>
            <p className="text-xl text-gray-600">Limited-time offerings featuring the best of the season</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=500" alt="Autumn special" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-red-900 mb-2">Autumn Harvest Soup</h3>
                <p className="text-gray-600 mb-4">
                  Roasted butternut squash, apple, ginger, coconut milk, toasted pumpkin seeds
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-800">$12</span>
                  <Badge className="bg-orange-100 text-orange-800">Seasonal</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=500" alt="Seasonal drink" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-red-900 mb-2">Spiced Apple Cider</h3>
                <p className="text-gray-600 mb-4">
                  House-made apple cider, cinnamon, cloves, star anise, served hot or cold
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-800">$6</span>
                  <Badge className="bg-orange-100 text-orange-800">Seasonal</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
