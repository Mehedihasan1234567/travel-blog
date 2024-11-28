/** @format */

// /** @format */

// import Image from "next/image";
// import { Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function TravelGrid() {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid gap-4 md:grid-cols-2 md:grid-rows-[600px]">
//         {/* Left column - stacked cards */}
//         <div className="grid gap-4">
//           {/* Top card - Booking */}
//           <Card className="relative overflow-hidden bg-zinc-900 text-white">
//             <CardContent className="flex h-full flex-col justify-between p-6">
//               <div className="mb-4">
//                 <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
//                   <Globe className="h-5 w-5" />
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <h2 className="text-3xl font-bold leading-tight">
//                   Explore more to get your comfort zone
//                 </h2>
//                 <p className="text-zinc-400">Book your perfect stay with us.</p>
//                 <Button className="inline-flex items-center gap-2 bg-white text-black">
//                   Booking Now
//                   <svg
//                     className="h-4 w-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Bottom card - Article */}
//           <Card className="relative overflow-hidden">
//             <Image
//               src="/grid-img.avif?height=200&width=400"
//               alt="Mountain road with cyclist"
//               className="object-cover"
//               fill
//             />
//             <CardContent className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
//               <p className="mb-2 text-sm">Article Available</p>
//               <p className="text-5xl font-bold">78</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Right column - full height card */}
//         <Card className="relative overflow-hidden">
//           <Image
//             src="/grid-img-2.avif?height=400&width=600"
//             alt="Coastal cliffs"
//             className="object-cover"
//             fill
//           />
//           <CardContent className="absolute inset-0 flex items-center justify-center bg-black/20 p-6 text-center text-white">
//             <h2 className="max-w-md text-3xl font-bold leading-tight">
//               Beyond accommodation, creating memories of a lifetime
//             </h2>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
