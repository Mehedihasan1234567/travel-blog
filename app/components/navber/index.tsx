/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navItems = ["Hotel", "Flight", "Train", "Travel", "Car Rental"];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-teal-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold">
            Horizone
          </Link>
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={``}
                  className="hover:text-teal-200 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search destination..."
              className="pl-3 pr-10 py-2 rounded-md bg-teal-600 text-white placeholder-teal-300 w-64 focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-300"
              size={18}
            />
          </div>
          <Button variant="ghost" size="sm" className="text-white">
            <Globe className="mr-2" size={18} />
            EN
          </Button>
          <Button variant="ghost" size="sm" className="text-white">
            Log In
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-teal-700 hover:bg-teal-100"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
