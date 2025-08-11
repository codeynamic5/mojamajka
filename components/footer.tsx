import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <div>
                  <p>123 Main Street</p>
                  <p>Downtown District</p>
                  <p>City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <p>hello@cornercafe.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="font-semibold">Mon - Fri</p>
                  <p>7:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="ml-8">
                <p className="font-semibold">Saturday</p>
                <p>8:00 AM - 10:00 PM</p>
              </div>
              <div className="ml-8">
                <p className="font-semibold">Sunday</p>
                <p>8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/menu" className="block hover:text-red-200 transition-colors">
                Our Menu
              </Link>
              <Link href="/reservations" className="block hover:text-red-200 transition-colors">
                Make a Reservation
              </Link>
              <Link href="/about" className="block hover:text-red-200 transition-colors">
                About Us
              </Link>
              <Link href="#" className="block hover:text-red-200 transition-colors">
                Private Events
              </Link>
              <Link href="#" className="block hover:text-red-200 transition-colors">
                Catering
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="hover:text-red-200 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-red-200 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-red-200 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-sm text-red-200">Stay connected for updates, specials, and behind-the-scenes moments!</p>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-red-200">
            © 2024 The Corner Cafe. All rights reserved. |
            <Link href="#" className="hover:text-white ml-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-white ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
