/** @format */

import Navbar from "@/app/components/navber";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <div
          className=""
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundColor: "rgba(0, 0, 0, 0.5)",

            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
          }}
        >
          <div>
            <Navbar />
          </div>
          <div className="flex flex-col pt-[500px] pl-52">
            <div className=" max-w-xl">
              <p className="text-white text-xl">{slice.primary.label}</p>
              <div>
                <p className="text-5xl text-white font-bold">
                  {slice.primary.title}
                </p>
                <p className="text-white text-xl">
                  {slice.primary.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
