"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// // user profile
// // testimonies
// // Name
// // Picture

interface TestimonyProps {
  testimonies: string;
  profilePic?: string;
  name: string;
  backgroundPic?: string;
  backgroundColor?: string;
  id: string;
}

export interface GalleryProps {
  items: TestimonyProps[];
}

export function Gallery({ items }: GalleryProps) {
  const [activeOne, setActiveOne] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 800; // Adjust this value to control scroll distance
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-9 max-w-5xl mx-auto relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full z-50 cursor-pointer"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full z-50 cursor-pointer"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll no-scrollbar h-[450px] gap-9 relative flex items-center"
      >
        {items.map((item, indx) => (
          <div
            key={indx}
            className="shrink-0 gap-6 border md:w-[37%] w-full border-neutral-100 rounded-4xl overflow-hidden relative p-4"
            style={{
              backgroundImage: item.backgroundPic
                ? `url(${item.backgroundPic})`
                : "none",
              backgroundColor:
                !item.backgroundPic && item.backgroundColor
                  ? item.backgroundColor
                  : "transparent",
              // width: "37%",
              height: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            {item.backgroundPic && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-transparent" />
            )}

            {item.profilePic && (
              <Image
                src={item.profilePic! && item.profilePic}
                width={40}
                height={30}
                alt={item.name}
                className={` absolute ${
                  item.profilePic
                    ? " z-40 text-white  font-display size-14 object-cover rounded-full"
                    : ""
                }`}
              />
            )}
            <p
              className={`text-sm text-wrap ${
                item.backgroundPic
                  ? "relative z-40 text-white text-xl font-display mt-6"
                  : "mt-24"
              }`}
            >
              {item.testimonies}
            </p>
            <p
              className={`text-sm text-wrap absolute bottom-4  ${
                item.backgroundPic ? " z-40 text-white  font-display" : ""
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center">
        <div className="flex items-center justify-center p-1.5 rounded-2xl bg-[#f9dede] gap-x-2 mt-10 ">
          {items.map((item, i) => (
            <div>
              <div className="bg-[#3D0000] size-2 rounded-full" />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

// on smaller device iwant just one carpusel to fill the viewport, when i click next it scroll in the next view testimony, also i want to be able to click on th edot to take me to the selected one
