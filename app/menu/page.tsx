"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Leaf, Flame, Wheat, Star, Thermometer, Snowflake, Dot, Coffee, GlassWater, X } from "lucide-react"

const menuCategories = ["All", "Appetizers", "Sharing", "Main Course", "Pasta Series", "Wedangan", "Blended Drinks", "Milk Based", "Coconut Based", "Coffee Based", "Tea Based", "Soda Based", "Salad", "Dessert"]

const menuItems = [
  // Appetizers
  {
    id: 1,
    name: "Baked Potato",
    description: "Kentang panggang, disajikan dengan daging cincang dan saus keju",
    price: 39,
    category: "Appetizers",
    dietary: [],
    image: "/menu/appetizers/baked-potato.JPG",
  },
  {
    id: 2,
    name: "Crispy Mushrooms",
    description: "Jamur goreng crispy, disajikan dengan mayo dan saus sambal",
    price: 35,
    category: "Appetizers",
    dietary: ["vegetarian"],
    image: "/menu/appetizers/crispy-mushrooms.JPG",
  },
  {
    id: 3,
    name: "Belgian Fries",
    description: "Kentang goreng, disajikan dengan mayo dan saus sambal",
    price: 33,
    category: "Appetizers",
    dietary: [],
    image: "/menu/appetizers/belgian-fries.jpg",
  },
  {
    id: 4,
    name: "Potato Wedges",
    description: "Kentang goreng wedges disajikan dengan mayo dan saus sambal",
    price: 33,
    category: "Appetizers",
    dietary: [],
    image: "/menu/appetizers/potato-wedges.JPG",
  },
  {
    id: 5,
    name: "Nachos",
    description: "Keripik jagung, disajikan dengan daging cincang, sambal salsa, dan saus keju",
    price: 45,
    category: "Appetizers",
    dietary: ["spicy"],
    image: "/menu/appetizers/nachoss.JPG",
  },
  {
    id: 6,
    name: "Singkong Goreng",
    description: "Disajikan dengan bumbu keju dan saus sambal",
    price: 25,
    category: "Appetizers",
    dietary: [],
    image: "/menu/appetizers/singkong-goreng.JPG",
  },
  {
    id: 7,
    name: "Chicken Popcorn",
    description: "Ayam goreng popcorn, disajikan dengan mayo dan saus sambal",
    price: 39,
    category: "Appetizers",
    dietary: [],
    image: "/menu/appetizers/chicken-popcorn.JPG",
  },
  {
    id: 8,
    name: "Crispy Nila's Fingers",
    description: "Ikan nila goreng crispy, disajikan dengan mayo dan saus sambal",
    price: 39,
    category: "Appetizers",
    dietary: [],
    image: "/menu/appetizers/nila-fingers.JPG",
  },

  // Sharing
  {
    id: 9,
    name: "Smoked Meat Platter",
    description: "Daging asap pilihan, disajikan dengan sambal khas Moja Majka",
    price: 137,
    category: "Sharing",
    dietary: [],
    image: "/menu/sharing/smoked-meatplat.jpg",
  },
  {
    id: 10,
    name: "Creamy Fettuccine Steak",
    description: "Pasta parpadelle dan meltique steak disajikan dengan telur onsen",
    price: 159,
    category: "Sharing",
    dietary: [],
    image: "/menu/sharing/creamy-fett.jpg",
  },
  {
    id: 11,
    name: "Ayam Pandan",
    description: "Ayam goreng pandan, disajikan dengan sambal",
    price: 49,
    category: "Sharing",
    dietary: ["spicy"],
    image: "/menu/sharing/ayam-pandan.jpg",
  },
  {
    id: 12,
    name: "Mangut Nila",
    description: "Ikan nila bakar dengan kuah gulai",
    price: 69,
    category: "Sharing",
    dietary: [],
    image: "/menu/sharing/mangut-nila.jpg",
  },
  {
    id: 13,
    name: "Gongso Ayam / Bebek Asap",
    description: "Ayam atau bebek asap ditumis setengah kering dengan rempah dan kuah, disajikan dengan sambal",
    price: "39 / 44.5",
    category: "Sharing",
    dietary: [],
    image: "/menu/sharing/gongso-bebek.jpg",
  },
  {
    id: 14,
    name: "Sop Senerek",
    description: "Sop daging kacang khas Magelang ala Moja Majka",
    price: 45,
    category: "Sharing",
    dietary: [],
    image: "fruit tart with berries",
  },

  // Main Course
  {
    id: 15,
    name: "Beef Patty Steak (Pljeskavica)",
    description: "Disajikan dengan pilihan saus keju atau saus taragon",
    price: 85,
    category: "Main Course",
    dietary: [],
    image: "/menu/main/beefpatty-steak.jpg",
  },
  {
    id: 16,
    name: "Loaded Cheese Burger",
    description: "Disajikan dengan pilihan side dish, potato wedges / french fries",
    price: 85,
    category: "Main Course",
    dietary: [],
    image: "/menu/main/loaded-cheeseburger.jpg",
  },
  {
    id: 17,
    name: "Buttered Meltique Steak",
    description: "Meltique steak dengan pilihan side dish: mashed potato / potato wedges / french fries",
    price: 150,
    category: "Main Course",
    dietary: [],
    image: "/menu/main/buttered-meltique.jpg",
  },
  {
    id: 18,
    name: "Nila Bakar",
    description: "Disajikan dengan nasi putih dan sambal",
    price: 49,
    category: "Main Course",
    dietary: ["spicy"],
    image: "/menu/main/nila-bakar.jpg",
  },
  {
    id: 19,
    name: "Iga Lombok Ijo",
    description: "Iga sapi bakar dengan sambal lombok ijo",
    price: 79,
    category: "Main Course",
    dietary: ["spicy"],
    image: "/menu/main/iga-lombokijo.jpg",
  },
  {
    id: 20,
    name: "Kwetiau Goreng Biyung",
    description: "Kwetiau goreng dengan bumbu spesial",
    price: 30,
    category: "Main Course",
    dietary: [],
    image: "/menu/main/kwetiau-biyung.jpg",
  },
  {
    id: 21,
    name: "Bakmi Biyung (Goreng / Godog)",
    description: "Bakmi goreng atau godog khas Moja Majka",
    price: 30,
    category: "Main Course",
    dietary: [],
    image: "/menu/main/bakmi-biyung.jpg",
  },
  {
    id: 22,
    name: "Nasi Goreng Biyung",
    description: "Nasi goreng khas Moja Majka dengan pilihan daging sapi atau ayam asap",
    price: 30,
    category: "Main Course",
    dietary: [],
    image: "/menu/main/nasgor-biyung.jpg",
  },
  {
    id: 23,
    name: "Smoked Beef Brisket",
    description: "Daging sapi asap disajikan dengan nasi daun jeruk dan sambal",
    price: 59,
    category: "Main Course",
    dietary: ["spicy"],
    image: "fruit tart with berries",
  },
  {
    id: 24,
    name: "Smoked Chicken",
    description: "Daging ayam asap disajikan dengan nasi daun jeruk dan sambal",
    price: 45,
    category: "Main Course",
    dietary: ["spicy"],
    image: "fruit tart with berries",
  },
  {
    id: 25,
    name: "Ayam Bakar",
    description: " ",
    price: 45,
    category: "Main Course",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 26,
    name: "Ayam Cincang Kemangi",
    description: " ",
    price: 39,
    category: "Main Course",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 27,
    name: "Iga Bakar",
    description: " ",
    price: 79,
    category: "Main Course",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 28,
    name: "Sop Iga",
    description: " ",
    price: 79,
    category: "Main Course",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 29,
    name: "Bebek Bakar",
    description: " ",
    price: 53,
    category: "Main Course",
    dietary: [],
    image: "fruit tart with berries",
  },

  /* Pasta Series */
  {
    id: 30,
    name: "Smoked Beef Brisket Carbonara",
    description: "Spaghetti carbonara dengan topping daging sapi asap",
    price: 59,
    category: "Pasta Series",
    dietary: [],
    image: "/menu/pasta/beefbrisket-carbo.jpg",
  },
  {
    id: 31,
    name: "Nila Aglio Olio Pasta",
    description: "Spaghetti aglio olio dengan topping nila goreng tepung",
    price: 37,
    category: "Pasta Series",
    dietary: [],
    image: "/menu/pasta/nila-agliolio.jpg",
  },
  {
    id: 32,
    name: "Baked Bolognese",
    description: "Spaghetti bolognese dengan topping keju dan bread crumbs",
    price: 40,
    category: "Pasta Series",
    dietary: [],
    image: "/menu/pasta/baked-bolognese.jpg",
  },
  {
    id: 33,
    name: "Beef & Mushroom Carbonara",
    description: "Spaghetti carbonara dengan topping daging sapi dan jamur",
    price: 45,
    category: "Pasta Series",
    dietary: [],
    image: "/menu/pasta/beefmushroom-carbo.jpg",
  },
  {
    id: 34,
    name: "Squid Black Pasta",
    description: "Spaghetti aglio olio dengan topping cumi goreng tepung",
    price: 40,
    category: "Pasta Series",
    dietary: [],
    image: "/menu/pasta/squid-black.jpg",
  },
  {
    id: 35,
    name: "Cheese Beef Patty Pasta",
    description: "Spaghetti dengan saus keju dan beef patty",
    price: 43,
    category: "Pasta Series",
    dietary: [],
    image: "/menu/pasta/cheesebeef-patty.jpg",
  },
  {
    id: 36,
    name: "Mac & Cheese",
    description: "Pasta macaroni dengan saus keju",
    price: 37,
    category: "Pasta Series",
    dietary: [],
    image: "/menu/pasta/mac-cheese.jpg",
  },

  // Wedangan
  {
    id: 37,
    name: "Swastamita Java",
    description: "Wedang Rempah Sparkling (Jahe, serai, secang, cabe jawa, dll.)",
    price: 25,
    category: "Wedangan",
    dietary: ["signature"],
    image: "/menu/drinks/swastamita-java.jpg",
  },
  {
    id: 38,
    name: "Wedang Uwuh",
    description: "Secang & rempah-rempah lainnya",
    price: 25,
    category: "Wedangan",
    dietary: [],
    image: "/menu/drinks/uwuh.jpg",
  },
  {
    id: 39,
    name: "Wedang Kemucur",
    description: "Jahe, Lemon, Alang-alang & rempah lainnya",
    price: 25,
    category: "Wedangan",
    dietary: [],
    image: "/menu/drinks/kemucur.jpg",
  },

  // Blended Drinks
  {
    id: 40,
    name: "Velvet Blend",
    description: "Red Velvet with a Berry & Cream Cheese",
    price: 35,
    category: "Blended Drinks",
    dietary: ["signature", "ice"],
    image: "/menu/drinks/velvet-blend.jpg",
  },
  {
    id: 41,
    name: "Tropical Colada",
    description: "Mango, Pineapple, and Coconut",
    price: 35,
    category: "Blended Drinks",
    dietary: ["signature", "ice"],
    image: "/menu/drinks/tropical-colada.jpg",
  },
  {
    id: 42,
    name: "Cookies & Cream",
    description: "Blended milk & cookies",
    price: 35,
    category: "Blended Drinks",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 43,
    name: "Pink Cookies & Cream",
    description: "Blended strawberry milk & cookies",
    price: 35,
    category: "Blended Drinks",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 44,
    name: "Matcha Hazelnut",
    description: "Premium Matcha flavoured with hazelnut",
    price: 35,
    category: "Blended Drinks",
    dietary: [],
    image: "fruit tart with berries",
  },

  // Milk Based
  {
    id: 45,
    name: "Butterscotch Lotus",
    description: "Lotus Biscoff, Butterscotch & Milk",
    price: 35,
    category: "Milk Based",
    dietary: ["signature", "ice"],
    image: "fruit tart with berries",
  },
  {
    id: 46,
    name: "Matcha Latte",
    description: "Using Premium Matcha Uji Blend from Kyoto, Nara & Mie Perfecture",
    price: "35/40",
    category: "Milk Based",
    dietary: ["hot", "ice"],
    image: "fruit tart with berries",
  },
  {
    id: 47,
    name: "Chocolate",
    description: "Cocoa & milk",
    price: "28/30",
    category: "Milk Based",
    dietary: ["hot", "ice"],
    image: "fruit tart with berries",
  },
  {
    id: 48,
    name: "Caramel Lotus",
    description: "Lotus Biscoff, Caramel & Milk",
    price: 32,
    category: "Milk Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },
  {
    id: 49,
    name: "Flavoured Chocolate",
    description: "Double Hazelnut | Butterscotch | Rum (Non-alcohol) | Strawberry Fresh",
    price: "30/32",
    category: "Milk Based",
    dietary: ["hot", "ice"],
    image: "fruit tart with berries",
  },

  // Coconut Based
  {
    id: 50,
    name: "Oceanberry",
    description: "Elderberry - Butterfly Pea - Coconut",
    price: 30,
    category: "Coconut Based",
    dietary: ["signature"],
    image: "fruit tart with berries",
  },
  {
    id: 51,
    name: "Pink Coral",
    description: "Sakura - Hibiscus - Coconut",
    price: 30,
    category: "Coconut Based",
    dietary: ["signature"],
    image: "fruit tart with berries",
  },

  // Coffe Based
  {
    id: 52,
    name: "Kopi Susu Moja Majka",
    description: "Our Signature with a Unique Flavour",
    price: 32,
    category: "Coffee Based",
    dietary: ["signature", "ice"],
    image: "fruit tart with berries",
  },
  {
    id: 53,
    name: "Kopi Rempah",
    description: "Espresso, Milk & Spices",
    price: 25,
    category: "Coffee Based",
    dietary: ["signature", "ice", "hot"],
    image: "fruit tart with berries",
  },
  {
    id: 54,
    name: "Double Peach Espresso",
    description: "Shaken Double Espresso Flavoured with Peach & Soda",
    price: 32,
    category: "Coffee Based",
    dietary: ["signature", "ice"],
    image: "fruit tart with berries",
  },
  {
    id: 55,
    name: "Espresso - 100% Arabica",
    description: " ",
    price: 18,
    category: "Coffee Based",
    dietary: ["ice", "hot", "black"],
    image: "fruit tart with berries",
  },
  {
    id: 56,
    name: "Espresso - House Blend",
    description: " ",
    price: 18,
    category: "Coffee Based",
    dietary: ["ice", "hot", "black"],
    image: "fruit tart with berries",
  },
  {
    id: 57,
    name: "Americano - 100% Arabica",
    description: " ",
    price: 22,
    category: "Coffee Based",
    dietary: ["ice", "hot", "black"],
    image: "fruit tart with berries",
  },
  {
    id: 58,
    name: "Americano - House Blend",
    description: " ",
    price: 22,
    category: "Coffee Based",
    dietary: ["ice", "hot", "black"],
    image: "fruit tart with berries",
  },
  {
    id: 59,
    name: "Americano Kombucha",
    description: " ",
    price: 28,
    category: "Coffee Based",
    dietary: ["ice", "black"],
    image: "fruit tart with berries",
  },
  {
    id: 60,
    name: "Strawberry Café Latte",
    description: "Single Ristretto - Strawberry Milk",
    price: "28/30",
    category: "Coffee Based",
    dietary: ["ice", "hot", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 61,
    name: "Kopi Susu Klasik",
    description: "Classic Indonesian Coffee & Milk",
    price: 29,
    category: "Coffee Based",
    dietary: ["ice", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 62,
    name: "Caramel Macchiato",
    description: "Espresso with Steamed Milk & Caramel",
    price: 33,
    category: "Coffee Based",
    dietary: ["ice", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 63,
    name: "Flavoured Iced Latte",
    description: "Vanilla, Caramel, Hazelnut, Butterscotch, Rum, Osmanthus, and Lavender",
    price: 30,
    category: "Coffee Based",
    dietary: ["ice", "hot", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 64,
    name: "Vietnamese",
    description: "Espresso & Sweet Condensed Milk",
    price: "24/26",
    category: "Coffee Based",
    dietary: ["ice", "hot", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 65,
    name: "Magic",
    description: "Double Ristretto - Steamed Milk",
    price: 30,
    category: "Coffee Based",
    dietary: ["hot", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 66,
    name: "Piccolo",
    description: "Single Ristretto - Steamed Milk",
    price: 27,
    category: "Coffee Based",
    dietary: ["hot", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 67,
    name: "Cappucino",
    description: "Single Espresso - Steamed Milk",
    price: 27,
    category: "Coffee Based",
    dietary: ["ice", "hot", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 68,
    name: "Mochaccino",
    description: "Espresso, Chocolate & Milk",
    price: "27/29",
    category: "Coffee Based",
    dietary: ["ice", "hot", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 69,
    name: "Latte",
    description: "Single Espresso - Steamed Milk",
    price: "26/28",
    category: "Coffee Based",
    dietary: ["ice", "hot", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 70,
    name: "Dirty Latte",
    description: "Single Espresso & Cold Milk",
    price: 28,
    category: "Coffee Based",
    dietary: ["ice", "white"],
    image: "fruit tart with berries",
  },
  {
    id: 71,
    name: "Double Shaken Floral",
    description: "Shaken Double Espresso Flavoured with Sakura, Rose, and Soda",
    price: 32,
    category: "Coffee Based",
    dietary: ["ice", "mocktail"],
    image: "fruit tart with berries",
  },
  {
    id: 72,
    name: "Double Shaken Caramel",
    description: "Shaken Double Espresso Flavoured with Caramel & Milk",
    price: 32,
    category: "Coffee Based",
    dietary: ["ice", "mocktail"],
    image: "fruit tart with berries",
  },
  {
    id: 73,
    name: "Manual Brew (V60/Tubruk)",
    description: "Drip Coffee",
    price: 32,
    category: "Coffee Based",
    dietary: ["ice", "hot"],
    image: "fruit tart with berries",
  },
  {
    id: 74,
    name: "Kompot Kafe",
    description: "Coldbrew, Hibiscus, and Red Fruits",
    price: 30,
    category: "Coffee Based",
    dietary: ["signature", "ice", "mocktail"],
    image: "fruit tart with berries",
  },
  {
    id: 75,
    name: "Citric Bloom",
    description: "Coldbrew, Citrus, and Flower",
    price: 30,
    category: "Coffee Based",
    dietary: ["ice", "mocktail"],
    image: "fruit tart with berries",
  },
  {
    id: 76,
    name: "Slatko Od Jagoda",
    description: "Coldbrew, Spices, and Strawberry",
    price: 30,
    category: "Coffee Based",
    dietary: ["ice", "mocktail"],
    image: "fruit tart with berries",
  },

  // Tea Based
  {
    id: 77,
    name: "Caramel Earl Grey",
    description: "Earl Grey, Caramel, and Cream",
    price: 30,
    category: "Tea Based",
    dietary: ["ice", "signature", "mocktail"],
    image: "fruit tart with berries",
  },
  {
    id: 78,
    name: "Victorian (Viktorijanski)",
    description: "Earl Grey - Rose",
    price: 30,
    category: "Tea Based",
    dietary: ["ice", "mocktail"],
    image: "fruit tart with berries",
  },
  {
    id: 79,
    name: "Golden Sunfruit",
    description: "Traditional Sumbing Tea with Kombucha, Apple, and Peach",
    price: 28,
    category: "Tea Based",
    dietary: ["ice", "mocktail"],
    image: "fruit tart with berries",
  },
  {
    id: 85,
    name: "Peach Iced Tea",
    description: " ",
    price: 25,
    category: "Tea Based",
    dietary: ["ice", "signature"],
    image: "fruit tart with berries",
  },
  {
    id: 86,
    name: "Berries Paradise - Arteasan",
    description: " ",
    price: 22,
    category: "Tea Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },
  {
    id: 87,
    name: "French Earl Grey - Arteasan",
    description: " ",
    price: 22,
    category: "Tea Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },
  {
    id: 88,
    name: "Passion Fruit - Arteasan",
    description: " ",
    price: 22,
    category: "Tea Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },
  {
    id: 89,
    name: "Lychee Iced Tea",
    description: " ",
    price: 25,
    category: "Tea Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },
  {
    id: 90,
    name: "Traditional Tea (Gunung Sumbing)",
    description: "Teh Tradisional yang berasal dari Gunung Sumbing (Per gelas / 1 pitcher)",
    price: "12/24",
    category: "Tea Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },

  // Soda Based
  {
    id: 80,
    name: "Crainberry Apple Fizz",
    description: "Crainberry & Apple Soda",
    price: 28,
    category: "Soda Based",
    dietary: ["ice", "signature"],
    image: "fruit tart with berries",
  },
  {
    id: 81,
    name: "Cream Soda Pop",
    description: "Strawberry & Cream Soda",
    price: 28,
    category: "Soda Based",
    dietary: ["ice", "signature"],
    image: "fruit tart with berries",
  },
  {
    id: 82,
    name: "Cuban Mojito",
    description: "Rum, Mint, and Citrus",
    price: 28,
    category: "Soda Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },
  {
    id: 83,
    name: "Strawberry Mojito",
    description: "Strawberry, Mint, and Citrus",
    price: 28,
    category: "Soda Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },
  {
    id: 84,
    name: "Ramoe Rosemary",
    description: "Rosemary & Citrus Soda",
    price: 28,
    category: "Soda Based",
    dietary: ["ice"],
    image: "fruit tart with berries",
  },

  // Salad
  {
    id: 91,
    name: "Grilled Salad",
    description: "Sayuran segar yang dibakar dan disajikan dengan garlic herbs dressing",
    price: 30,
    category: "Salad",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 92,
    name: "Fresh Salad",
    description: "Sayuran segar yang dibakar dan disajikan dengan garlic herbs dressing",
    price: 30,
    category: "Salad",
    dietary: [],
    image: "fruit tart with berries",
  },

  // Dessert
  {
    id: 93,
    name: "Bubur Sengkolo",
    description: "Bubur Ketan Putih",
    price: 25,
    category: "Dessert",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 94,
    name: "Mango Sago",
    description: "Potongan mangga dingin disajikan dengan mango puree dan sagu mutiara",
    price: 39,
    category: "Dessert",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 95,
    name: "Moja Majka Creamy Mango Milk",
    description: "Disajikan dengan sagu mutiara",
    price: 35,
    category: "Dessert",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 96,
    name: "Carang Gesing",
    description: "Pisang Santan",
    price: 20,
    category: "Dessert",
    dietary: [],
    image: "fruit tart with berries",
  },
  {
    id: 97,
    name: "Butterscotch Fried Banana",
    description: "Disajikan dengan es krim vanilla",
    price: 37,
    category: "Dessert",
    dietary: [],
    image: "fruit tart with berries",
  },
]

const dietaryIcons = {
  vegetarian: { icon: Leaf, label: "Vegetarian", color: "bg-green-100 text-green-800" },
  vegan: { icon: Leaf, label: "Vegan", color: "bg-green-100 text-green-800" },
  "gluten-free": { icon: Wheat, label: "Gluten-Free", color: "bg-yellow-100 text-yellow-800" },
  spicy: { icon: Flame, label: "Spicy", color: "bg-red-100 text-red-800" },
  signature: { icon: Star, label: "Signature", color: "bg-blue-100 text-blue-800" },
  hot: { icon: Thermometer, label: "Hot", color: "bg-orange-100 text-orange-800" },
  ice: { icon: Snowflake, label: "Ice", color: "bg-cyan-100 text-cyan-800" },
  black: { icon: Coffee, label: "Black Series", color: "bg-gray-900 text-white" },
  white: { icon: Coffee, label: "White Series", color: "bg-gray-100 text-gray-900" },
  mocktail: { icon: GlassWater, label: "Mocktail", color: "bg-pink-100 text-pink-800" }
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItem, setSelectedItem] = useState<typeof menuItems[0] | null>(null)

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
          {/* <Button className="bg-red-800 hover:bg-red-700">
            <Download className="w-4 h-4 mr-2" />
            Download PDF Menu
          </Button> */}
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div> */}
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
            {filteredItems.map((item) => {
              const isDrinkCategory = [
                "Wedangan", 
                "Blended Drinks", 
                "Milk Based", 
                "Coconut Based", 
                "Coffee Based", 
                "Tea Based", 
                "Soda Based"
              ].includes(item.category)
              
              return (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className={`relative ${isDrinkCategory ? 'h-64' : 'h-48'}`}>
                  <Image
                    src={item.image.startsWith('/') ? item.image : `/placeholder.svg?height=200&width=300&query=${item.image}`}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-red-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-red-800">
                      {typeof item.price === 'string' ? item.price : `${item.price}`}
                    </span>
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
              )
            })}
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
                  <span className="text-2xl font-bold text-red-800">12</span>
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
                  <span className="text-2xl font-bold text-red-800">6</span>
                  <Badge className="bg-orange-100 text-orange-800">Seasonal</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal for enlarged item view */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Semi-transparent backdrop */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Modal content */}
          <div 
            className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-2xl font-bold text-red-900">
                  {selectedItem.name}
                </h2>
              </div>
              
              {/* Large Image */}
              <div className={`relative w-full rounded-lg overflow-hidden ${
                ["Wedangan", "Blended Drinks", "Milk Based", "Coconut Based", "Coffee Based", "Tea Based", "Soda Based"].includes(selectedItem.category)
                  ? 'h-80 md:h-96' 
                  : 'h-64 md:h-80'
              }`}>
                <Image
                  src={selectedItem.image.startsWith('/') ? selectedItem.image : `/placeholder.svg?height=400&width=600&query=${selectedItem.image}`}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Price and Category */}
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-sm">
                  {selectedItem.category}
                </Badge>
                <span className="text-3xl font-bold text-red-800">
                  {typeof selectedItem.price === 'string' ? selectedItem.price : `${selectedItem.price}`}
                </span>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold text-lg mb-2">Description</h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Dietary Information */}
              {selectedItem.dietary.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Dietary Information</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.dietary.map((diet) => {
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
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
