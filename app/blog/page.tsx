import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import Footer from "../components/footer";

function Blog() {
  return (
    <>
      <div className=" h-fit bg-gradient-to-b from-white from-40% to-[#ffb5b5] rounded-b-4xl pb-56">
        <div className="max-w-7xl mx-auto">
          <div className="mt-44">
            <h1 className="text-5xl lg:text-7xl text-center text-[#3D0000]">
              The Bloom Journal
            </h1>
            <p className=" max-w-md mx-auto mt-8 text-md text-[#7D6161]">
              Discover expert insights, mindful tips, and guided practices to
              help you find balance and inner peace—one breath at a time.
            </p>
          </div>
          <div className="p-4 mt-16">
            <div className="grid gap-8 content-start [--column-gap:12px] md:[--column-gap:24px] gap-x-[--column-gap] gap-y-8 md:gap-y-10 [--min-column-width:369px] md:[--min-column-width:308px] lg:[--min-column-width:343px] [--max-column-count:7] [--total-gap-width:calc((var(--max-column-count)-1)*var(--column-gap))] [--max-column-width:calc((100%-var(--total-gap-width))/var(--max-column-count))] grid-cols-[repeat(auto-fill,minmax(max(var(--min-column-width),var(--max-column-width)),1fr))]">
              <div>
                <div className="h-[29rem] ">
                  <Image
                    src="/assets/happy.avif"
                    alt="Beach meditation"
                    width={740}
                    height={180}
                    className="object-cover rounded-4xl h-full w-full"
                  />
                </div>
                <div className="ml-5 ">
                  <p className="text-[#7D6161] text-sm mt-3">Mar 1, 2027</p>

                  <h1 className="text-2xl text-[#3D0000] truncate line-clamp-1">
                    A Simple Habit for a Calmer Mind
                  </h1>
                </div>
              </div>
              <div>
                <div className="h-[29rem] ">
                  <Image
                    src="/assets/clean.avif"
                    alt="Beach meditation"
                    width={1040}
                    height={180}
                    className="object-cover rounded-4xl h-full w-full"
                  />
                </div>
                <div className="ml-5 ">
                  <p className="text-[#7D6161] text-sm mt-3">Mar 1, 2027</p>

                  <h1 className="text-2xl text-[#3D0000]">
                    A Simple Habit for a Calmer Mind
                  </h1>
                </div>
              </div>
              <div>
                <div className="h-[29rem] ">
                  <Image
                    src="/assets/laugh.avif"
                    alt="Beach meditation"
                    width={740}
                    height={180}
                    className="object-cover rounded-4xl h-full w-full"
                  />
                </div>
                <div className="ml-5 ">
                  <p className="text-[#7D6161] text-sm mt-3">Mar 1, 2027</p>

                  <h1 className="text-2xl text-[#3D0000]">
                    A Simple Habit for a Calmer Mind
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
// @peace.morgan21
