/** @format */

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BlogCard } from "../blog-card";

const categories = [
  "All",
  "Destination",
  "Culinary",
  "Lifestyle",
  "Tips & Hacks",
];

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Here, we share travel tips, destination guides, and stories that
          inspire your next adventure.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between border-b pb-4">
        <nav className="flex gap-8">
          {categories.map((category) => (
            <button
              key={category}
              className="text-muted-foreground hover:text-foreground"
            >
              {category}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          category="Destination"
          date="30 Jan 2024"
          readTime="10 mins read"
          title="Unveiling the Secrets Beyond the Tourist Trails"
          description="Dive into the local culture, discover hidden spots, and experience the authentic charm that often goes unnoticed by casual travelers."
          image="/card.avif?height=500&width=700"
          author={{
            name: "Seraphina Isabella",
            avatar: "/avater.png?height=40&width=40",
          }}
        />
        <BlogCard
          category="Lifestyle"
          date="29 Jan 2024"
          readTime="5 mins read"
          title="A Fashionista's Guide to Wanderlust"
          description="Explore the intersection of fashion and travel as we delve into the wardrobes of globetrotters. From packing tips to street style inspiration."
          image="/card.avif?height=400&width=600"
          author={{
            name: "Maximilian Bartholomew",
            avatar: "/avater.png?height=40&width=40",
          }}
        />
        <BlogCard
          category="Tips & Hacks"
          date="26 Jan 2024"
          readTime="15 mins read"
          title="Top 5 Apps and Gadgets That Will Transform Your Journeys"
          description="Explore the latest in travel technology with our guide to must-have apps and gadgets. From navigation tools to photography equipment."
          image="/card.avif?height=400&width=600"
          author={{
            name: "Anastasia Evangeline",
            avatar: "/avater.png?height=40&width=40",
          }}
        />
      </div>
    </section>
  );
}
