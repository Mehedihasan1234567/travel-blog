/** @format */

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Twitter,
  Facebook,
  DiscIcon as Discord,
  Music,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-white rounded"></div>
                <span className="text-xl font-bold">Horizone</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Our mission is to equip modern explorers with cutting-edge,
              functional, and stylish bags that elevate every adventure.
            </p>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/career"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Career
              </Link>
            </nav>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/return"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Return
              </Link>
              <Link
                href="/faq"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get Updates</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-400"
              />
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-200"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            ©2024 Horizone. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Discord className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <Music className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
