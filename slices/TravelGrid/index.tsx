/** @format */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Globe } from "lucide-react";

/**
 * Props for `TravelGrid`.
 */
export type TravelGridProps = SliceComponentProps<Content.TravelGridSlice>;

/**
 * Component for "TravelGrid" Slices.
 */
const TravelGrid = ({ slice }: TravelGridProps): JSX.Element => {
  console.log("ddd", slice.primary.title);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto p-4">
        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-[600px]">
          {/* Left column - stacked cards */}
          <div className="grid gap-4">
            {/* Top card - Booking */}
            <Card className="relative overflow-hidden bg-zinc-900 text-white">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div className="mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
                    <Globe className="h-5 w-5" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold leading-tight">
                    {slice.primary.text}
                  </h2>
                  <p className="text-zinc-400">
                    Book your perfect stay with us.
                  </p>
                  <Button className="inline-flex items-center gap-2 bg-white text-black">
                    Booking Now
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bottom card - Article */}
            <Card className="relative overflow-hidden">
              <PrismicNextImage
                field={slice.primary.gridimg}
                className="object-cover"
                fill
              />
              <CardContent className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <p className="mb-2 text-sm">Article Available</p>
                <p className="text-5xl font-bold">78</p>
              </CardContent>
            </Card>
          </div>

          {/* Right column - full height card */}
          <Card className="relative overflow-hidden">
            <PrismicNextImage
              field={slice.primary.gridimg2}
              className="object-cover"
              fill
            />
            <CardContent className="absolute inset-0 flex items-center justify-center bg-black/20 p-6 text-center text-white">
              <h2 className="max-w-md text-3xl font-bold leading-tight">
                {slice.primary.title}
              </h2>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TravelGrid;
