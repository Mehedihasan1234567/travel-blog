/** @format */

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export function BlogCard({
  category,
  date,
  readTime,
  title,
  description,
  image,
  author,
}: BlogCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
        <Badge className="absolute left-4 top-4 bg-white/90 text-foreground hover:bg-white/90">
          {category}
        </Badge>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={date}>{date}</time>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 pt-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{author.name}</span>
        </div>
      </div>
    </article>
  );
}
