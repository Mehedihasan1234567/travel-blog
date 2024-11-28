/** @format */

/** @format */

import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home_page");

  console.log(page.data.slices);

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home_page");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

// import Navber from "./components/navber";
// import BlogSection from "./components/blog-section";
// import TravelGrid from "./components/travel-grid";
// import Footer from "./components/footer";

// export default function Home() {
//   return (
// <div>
//   <div
//     className=""
//     style={{
//       backgroundImage: "url('/hero.jpg')",
//       backgroundColor: "rgba(0, 0, 0, 0.5)",

//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       minHeight: "100vh",
//     }}
//   >
//     <div>
//       <Navber />
//     </div>
//     <div className="flex flex-col pt-[500px] pl-52">
//       <div className=" max-w-xl">
//         <p className="text-white text-xl">Destination</p>
//         <div>
//           <p className="text-5xl text-white font-bold">
//             Exploring the wonders of Hiking
//           </p>
//           <p className="text-white text-xl">
//             An iconic landmarks this post unveils the secrets that make this
//             destination a traveler’s paradise
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <BlogSection />
//   </div>
//   <div>
//     <TravelGrid />
//   </div>
//   <div>
//     <Footer />
//   </div>
// </div>
//   );
// }
