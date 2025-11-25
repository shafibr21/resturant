import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Paintbrush as Pinterest,
} from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
  const instagramImages = [
    "/insta-1.jpg",
    "/insta-2.jpg",
    "/insta-3.jpg",
    "/insta-4.jpg",
    "/insta-5.jpg",
    "/insta-6.jpg",
  ];

  return (
    <footer className="bg-red-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Newsletter Section */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">RESTAURANT</h3>
              <p className="text-gray-200 text-sm">
                Subscribe our newsletter and get discount 25%off
              </p>
            </div>
            <div className="flex items-center bg-red-600 hover:bg-red-700 text-white rounded-lg">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white text-foreground placeholder:text-gray-400 border-0 rounded-l-lg px-4 py-2 w-full focus:outline-none"
              />
              <div className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg flex items-center justify-center">
                <Image
                  src="/Send-Button.svg"
                  alt="Subscribe"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link href="#" className="hover:text-red-400 transition">
                <Pinterest size={20} />
              </Link>
              <Link href="#" className="hover:text-red-400 transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-red-400 transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-red-400 transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-red-400 transition">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Contact us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <MapPin size={20} className="shrink-0" />
                <p className="text-gray-200 text-sm">
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </p>
              </div>
              <div className="flex gap-2">
                <Phone size={20} className="shrink-0 " />
                <p className="text-gray-200 text-sm">(480) 555-0103</p>
              </div>
              <div className="flex gap-2">
                <Mail size={20} className="shrink-0" />
                <p className="text-gray-200 text-sm">M.Alyaqout@4house.Co</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="shrink-0" />
                <p className="text-gray-200 text-sm">
                  Sun - Sat / 10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Links</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="#"
                className="text-gray-200 hover:text-white transition text-sm"
              >
                About us
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-white transition text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-white transition text-sm"
              >
                Our Menu
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-white transition text-sm"
              >
                Team
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-white transition text-sm"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Instagram Gallery */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Instagram Gallery</h3>
            <div className="grid grid-cols-3 gap-1">
              {instagramImages.map((image, index) => (
                <a
                  key={index}
                  href="#"
                  className="aspect-square overflow-hidden rounded-sm hover:opacity-75 transition"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Instagram gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#A52A2A] bg-[#A52A2A]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              Copyright © 2025. All rights reserved
            </p>
            <div className="flex gap-6 text-gray-300 text-sm">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Term of Use
              </Link>
              <Link href="#" className="hover:text-white transition">
                Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
